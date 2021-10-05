import { processChildren } from "./index";
import { getScope, setValue } from "./scopes";
import { range } from "./lib/range";

export const watchers = new Map();
export const globals = new Map();
export const scopes = new WeakMap();

export const globalsSet = (element, key, value, runWatchers = true) => {
  const scope = getScope(element);
  if (key in scope) {
    setValue(element, key, value);
  } else {
    globals.set(key, value);
  }

  if (runWatchers && watchers.has(key)) {
    const elements = watchers.get(key);
    processChildren(elements.values());
  }
};

export const computeValue = (element, value) => {
  const keyValues = new Map([...globals]);

  // include scope values
  const scope = getScope(element);
  Object.entries(scope).forEach(([key, value]) => {
    keyValues.set(key, value);
  });

  const keys = keyValues.keys();
  const values = keyValues.values();

  const func = new Function(...keys, "range", `return ${value}`);
  const result = func(...values, range);
  return result;
};

export const attributeValue = (element, { name, value }) => {
  if (name.startsWith("scope:")) {
    name = name.substring(6);
  }

  if (name.endsWith(":number")) {
    return {
      name: name.substring(0, name.length - 7),
      value: Number(value),
    };
  }

  if (name.endsWith(":bool")) {
    return {
      name: name.substring(0, name.length - 5),
      value: computeValue(element, value),
    };
  }

  if (name.endsWith(":object")) {
    return {
      name: name.substring(0, name.length - 7),
      value: computeValue(element, value),
    };
  }

  return {
    name,
    value,
  };
};
