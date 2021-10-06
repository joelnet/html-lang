import { fetchJson } from "./fetch";
import { runFor } from "./for";
import { addEventListener, removeAllEventListeners } from "./lib/events";
import { createScope, saveScope } from "./scopes";
import { injectStyleSheet } from "./stylesheet";
import {
  attributeValue,
  computeValue,
  globals,
  globalsSet,
  watchers,
} from "./values";

const childrenCache = new WeakMap();
const eventListeners = new WeakMap();

const setVisibility = (element, visible) => {
  element.style.display = visible ? "inline-block" : "";
};

const getSiblings = (element) =>
  [...element.parentNode.children].filter((el) => el !== element);

const saveVal = async (element) => {
  for (let attribute of element.attributes) {
    let name = attribute.name;
    let value = attribute.value;

    if (
      name.endsWith(":number") ||
      name.endsWith(":bool") ||
      name.endsWith(":object")
    ) {
      ({ name, value } = attributeValue(element, attribute));
    }

    if (name.endsWith(":fetch")) {
      name = name.substring(0, name.length - 6);
      value = { loading: true, error: null, response: null, json: null };

      const url = computeValue(element, attribute.value);
      fetchJson(url)
        .then(({ response, json }) => {
          const value = { loading: false, error: null, response, json };
          globalsSet(element, name, value);
        })
        .catch((error) => {
          const value = { loading: false, error, response: null, json: null };
          globalsSet(element, name, value);
        })
        .then(() => {
          const siblings = getSiblings(element);
          processChildren(siblings);
        });
    }

    if (name.endsWith(":?")) {
      name = name.substring(0, name.length - 2);
      value = computeValue(element, value);
    }

    globalsSet(element, name, value, false);
  }
};

const runIfElement = (element) => {
  if (!element.hasAttribute("test")) return false;
  const truthy = computeValue(element, element.getAttribute("test"));
  return !!truthy;
};

const runWhileElement = async (element) => {
  let scope = createScope(element);
  saveScope(element, scope);
  let truthy = runIfElement(element);

  // cache children
  if (!childrenCache.has(element)) {
    childrenCache.set(element, [...element.children]);
  }

  // remove elements real children
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }

  setVisibility(element, truthy);

  const children = childrenCache.get(element);
  while (truthy) {
    const clones = children.map((child) => child.cloneNode(true));
    for (let child of clones) {
      scope = { ...scope };
      if (child.tagName !== "VAL") {
        // VAL has no scope
        saveScope(child, scope);
      } else {
        saveScope(element, scope);
      }
      element.appendChild(child);
    }
    await processChildren(clones);
    truthy = runIfElement(element);
  }

  return false;
};

const parseAttributes = (element) => {
  removeAllEventListeners(element);

  for (let attribute of element.attributes) {
    if (attribute.name === "set:text") {
      element.textContent = computeValue(element, attribute.value);
    }
    // TODO: bind:value is new. deprecate onchange:set.
    if (attribute.name === "onchange:set" || attribute.name === "bind:value") {
      globalsSet(element, attribute.value, element.value);

      const handler = ({ target }) => {
        globalsSet(element, attribute.value, target.value);
      };

      addEventListener(element, keyup, handler);
    }
    if (attribute.name === "watch") {
      const keys = attribute.value.split(",").map((key) => key.trim());
      for (let key of keys) {
        if (!watchers.has(key)) {
          watchers.set(key, new Set());
        }
        watchers.get(key).add(element);
      }
    }
    if (attribute.name.startsWith("on:")) {
      const match = attribute.name.match(/on:(?<event>[^:]*)(:(?<name>.*))?/);
      const eventName = match ? match.groups.event : null;
      const name = match ? match.groups.name : null;

      const handler = () => {
        const value = computeValue(element, attribute.value);
        if (name) {
          globalsSet(element, name, value);
        }
      };

      addEventListener(element, eventName, handler);
    }
  }
};

const parseElement = async (element) => {
  if (element.tagName === "VAL") {
    return await saveVal(element);
  }
  if (element.tagName === "IF") {
    const truthy = runIfElement(element);
    setVisibility(element, truthy);
    return truthy;
  }
  if (element.tagName === "WHILE") {
    return await runWhileElement(element);
  }
  if (element.tagName === "FOR") {
    return await runFor(element);
  }

  parseAttributes(element);
};

export const processChildren = async (children) => {
  for (let element of children) {
    const truthy = await parseElement(element);
    if (element.hasChildNodes() && truthy !== false) {
      await processChildren(element.children);
    }
  }
};

const domContentLoaded = async () => {
  try {
    injectStyleSheet();
    await processChildren(document.body.children);
  } catch (err) {
    console.error(err);
  }
  window.globals = globals;
};

window.addEventListener("DOMContentLoaded", domContentLoaded, true);
