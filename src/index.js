import { runExec } from "./exec";
import { fetchJson } from "./fetch";
import { addEventListener, removeAllEventListeners } from "./lib/events";
import { createScope, saveScope } from "./scopes";
import { injectStyleSheet } from "./stylesheet";
import { runSub } from "./subroutine";
import {
  attributeValue,
  computeValue,
  globals,
  globalsSet,
  watchers,
} from "./values";
import { setVisibility } from "./lib/setVisibility";
import { isFor, runFor2 } from "./for2";
import { setAttribute } from "./lib/setAttribute";

const childrenCache = new WeakMap();

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

    globalsSet(element, name, value, true);
  }
};

const runIfElement = (element) => {
  if (!element.hasAttribute("test")) return false;
  const truthy = computeValue(element, element.getAttribute("test"));

  // ELSE?
  const next = element.nextElementSibling;
  if (next?.tagName === "ELSE") {
    next.removeAttribute("test");
    setAttribute(next, "test", truthy ? "false" : "true");
  }

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
    if (attribute.name === "#text") {
      element.textContent = computeValue(element, attribute.value);
    } else if (attribute.name.startsWith("#")) {
      const value = computeValue(element, attribute.value);
      setAttribute(element, attribute.name.substring(1), value);
    }
    // TODO: bind:value is new. deprecate onchange:set.
    if (attribute.name === "onchange:set" || attribute.name === "bind:value") {
      globalsSet(element, attribute.value, element.value);

      const handler = ({ target }) => {
        globalsSet(element, attribute.value, target.value);
      };

      addEventListener(element, "keyup", handler);
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
        if (attribute.value.match(/^\$.*/g)) {
          return runSub(attribute.value.substring(1));
        }

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
  if (element.tagName === "IF" || element.tagName === "ELSE") {
    const truthy = runIfElement(element);
    setVisibility(element, truthy);
    return truthy;
  }
  if (element.tagName === "WHILE") {
    return await runWhileElement(element);
  }
  if (element.tagName === "SUB") {
    return false;
  }
  if (element.tagName === "EXEC") {
    return await runExec(element);
  }
  if (isFor(element)) {
    return await runFor2(element);
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
