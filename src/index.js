import { injectStyleSheet } from "./stylesheet";
import { fetchJson } from "./fetch";

const globals = new Map();
const watchers = new Map();
const childrenCache = new WeakMap();

const setVisibility = (element, visible) => {
  element.style.display = visible ? "inline-block" : "";
};

const getSiblings = (element) =>
  [...element.parentNode.children].filter((el) => el !== element);

const trycatch = (promise) =>
  promise.then((data) => [null, data]).catch((err) => [err, null]);

const globalsSet = (key, value, runWatchers = true) => {
  globals.set(key, value);
  if (runWatchers && watchers.has(key)) {
    const elements = watchers.get(key);
    processChildren(elements.values());
  }
};

const computeValue = (value) => {
  const func = new Function(...globals.keys(), `return ${value}`);
  const result = func(...globals.values());
  return result;
};

const saveVal = async (element) => {
  for (let attribute of element.attributes) {
    let name = attribute.name;
    let value = attribute.value;

    if (name.endsWith(":number")) {
      name = name.substring(0, name.length - 7);
      value = Number(value);
    }

    if (name.endsWith(":bool")) {
      name = name.substring(0, name.length - 5);
      value = computeValue(value);
    }

    if (name.endsWith(":object")) {
      name = name.substring(0, name.length - 7);
      value = computeValue(value);
    }

    if (name.endsWith(":fetch")) {
      name = name.substring(0, name.length - 6);
      value = { loading: true, error: null, response: null, json: null };

      const url = computeValue(attribute.value);
      fetchJson(url)
        .then(({ response, json }) => {
          const value = { loading: false, error: null, response, json };
          globalsSet(name, value);
        })
        .catch((error) => {
          const value = { loading: false, error, response: null, json: null };
          globalsSet(name, value);
        })
        .then(() => {
          const siblings = getSiblings(element);
          processChildren(siblings);
        });
    }

    if (name.endsWith(":?")) {
      name = name.substring(0, name.length - 2);
      value = computeValue(value);
    }

    globalsSet(name, value, false);
  }
};

const runIfElement = (element) => {
  if (!element.hasAttribute("test")) return false;
  const truthy = computeValue(element.getAttribute("test"));
  return !!truthy;
};

const runWhileElement = async (element) => {
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
      element.appendChild(child);
    }
    await processChildren(clones);
    truthy = runIfElement(element);
  }

  return false;
};

const parseAttributes = (element) => {
  for (let attribute of element.attributes) {
    if (attribute.name === "set:text") {
      element.textContent = computeValue(attribute.value);
    }
    if (attribute.name === "onchange:set") {
      element.addEventListener("keyup", ({ target }) => {
        globalsSet(attribute.value, target.value);
      });
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

  parseAttributes(element);
};

const processChildren = async (children) => {
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
