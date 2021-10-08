import {
  appendChildren,
  cloneChildren,
  removeAllChildren,
} from "./lib/children";
import { computeValue } from "./values";

const isCmdAttribute = (attr) => attr.name === "cmd";

// runs <exec cmd="$mysub"></exec>
const runExecSub = (element, name) => {
  const sub = document.querySelector(`SUB[name=${name}]`);
  if (!sub) {
    throw new Error(`SUB "${name}" was expected to exist.`);
  }

  const children = cloneChildren(sub.children);

  removeAllChildren(element);
  appendChildren(element, children);

  return true;
};

export const runExec = (element) => {
  const attribute = [...element.attributes].find(isCmdAttribute);

  if (attribute.value.match(/^\$.*/g)) {
    return runExecSub(element, attribute.value.substring(1));
  }

  return computeValue(element, attribute.value);
};
