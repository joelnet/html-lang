export const setAttribute = (element, name, value) => {
  if (value === true) {
    element.setAttribute(name, "");
  } else if (value === false) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, value);
  }
};
