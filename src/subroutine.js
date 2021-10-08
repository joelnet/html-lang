import { processChildren } from "./index";

export const runSub = async (name, element) => {
  const sub = document.querySelector(`SUB[name=${name}]`);
  if (!sub) {
    throw new Error(`SUB "${name}" was expected to exist.`);
  }

  return await processChildren(sub.children);
};
