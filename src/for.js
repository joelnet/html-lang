import {
  appendChildren,
  cloneChildren,
  removeAllChildren,
} from "./lib/children";
import { setVisibility } from "./lib/setVisibility";
import { saveScope } from "./scopes";
import { computeValue } from "./values";

const childrenCache = new WeakMap();

const cacheAllChildren = (element) => {
  if (!childrenCache.has(element)) {
    childrenCache.set(element, [...element.children]);
  }
};

const isForInAttribute = (attribute) => attribute.name.endsWith(":in");
const isForOfAttribute = (attribute) => attribute.name.endsWith(":of");

export const runFor = async (element) => {
  const inAttr = [...element.attributes].find(isForInAttribute);
  const ofAttr = [...element.attributes].find(isForOfAttribute);

  if (!inAttr && !ofAttr) {
    throw new Error("FOR expected to contain a for:in or for:of attribute.");
  }
  if (inAttr && ofAttr && inAttr.value !== ofAttr.value) {
    throw new Error("FOR expected for:in and for:of values to be the same.");
  }

  const inName = inAttr && inAttr.name.substring(0, inAttr.name.length - 3);
  const ofName = ofAttr && ofAttr.name.substring(0, ofAttr.name.length - 3);

  const items = computeValue(element, inAttr ? inAttr.value : ofAttr.value);
  const hasItems = items != null ? items.length > 0 : false;

  if (!childrenCache.has(element)) {
    cacheAllChildren(element);
  }
  removeAllChildren(element);
  setVisibility(element, hasItems);

  const children = childrenCache.get(element);

  let index = 0;
  for (let item of items) {
    const scopeNode = document.createElement("SCOPE");
    element.appendChild(scopeNode);

    saveScope(scopeNode, {
      ...(inName && { [inName]: index }),
      ...(ofName && { [ofName]: item }),
    });

    const clones = cloneChildren(children);
    appendChildren(scopeNode, clones);

    index = index + 1;
  }
};
