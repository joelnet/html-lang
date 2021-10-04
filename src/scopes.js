import { attributeValue, scopes } from "./values";

const isScopeAttribute = (attribute) => attribute.name.startsWith("scope:");

export const createScope = (element) => {
  if (!element.hasAttributes()) {
    return null;
  }

  const attributes = [...element.attributes].filter(isScopeAttribute);

  const scope = {};

  for (let attribute of attributes) {
    const { name, value } = attributeValue(element, attribute);
    scope[name] = value;
  }

  return scope;
};

export const getScope = (element) => {
  const scope = {};

  let limit = 100;

  while (element != null && limit-- > 0) {
    const elementScope = scopes.get(element);

    if (elementScope) {
      for (let key of Object.keys(elementScope)) {
        if (key in scope === false) {
          scope[key] = elementScope[key];
        }
      }
    }

    element = element.parentNode;
  }

  return scope;
};

export const saveScope = (element, scope) => {
  scopes.set(element, scope);
};

export const setValue = (element, key, value) => {
  let limit = 100;

  while (element != null && limit-- > 0) {
    const elementScope = scopes.get(element);

    if (elementScope && key in elementScope) {
      elementScope[key] = value;
      return;
    }

    element = element.parentNode;
  }
};
