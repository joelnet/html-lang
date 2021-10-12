import {
  appendChildren,
  cloneChildren,
  removeAllChildren,
} from "./lib/children";
import { saveScope } from "./scopes";
import { computeValue } from "./values";

const isForOfAttribute = (attribute) => attribute.name.endsWith(":for:of");
const isForInAttribute = (attribute) => attribute.name.endsWith(":for:in");
const isForAttribute = (attribute) =>
  isForOfAttribute(attribute) || isForInAttribute(attribute);

const getForAttributes = (element) =>
  [...element.attributes].filter(isForAttribute);

export const isFor = (element) => getForAttributes(element).length > 0;

const getValName = ({ name }) => name.substring(0, name.length - 7);

const childrenCache = new WeakMap();

const cacheAllChildren = (element) => {
  if (!childrenCache.has(element)) {
    childrenCache.set(element, [...element.children]);
  }
};

const saveScopes = (elements, scope) => {
  for (let element of elements) {
    saveScope(element, scope);
  }
};

export const runFor2 = (element) => {
  const attributes = getForAttributes(element);
  const forOfAttribute = attributes.find(isForOfAttribute);
  const forInAttribute = attributes.find(isForInAttribute);
  const ofName = forOfAttribute ? getValName(forOfAttribute) : null;
  const inName = forInAttribute ? getValName(forInAttribute) : null;

  cacheAllChildren(element);
  removeAllChildren(element);

  const items = computeValue(element, forOfAttribute.value);
  const children = childrenCache.get(element);

  let index = 0;
  for (let item of items) {
    const clones = cloneChildren(children);
    const scope = {
      ...(ofName && { [ofName]: item }),
      ...(inName && { [inName]: index }),
    };

    saveScopes(clones, scope);
    appendChildren(element, clones);

    index = index + 1;
  }
};
