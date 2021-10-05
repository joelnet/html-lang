export const cloneChildren = (children) =>
  children.map((child) => child.cloneNode(true));

export const appendChildren = (element, children) => {
  for (let child of children) {
    element.appendChild(child);
  }
};

export const removeAllChildren = (element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
};
