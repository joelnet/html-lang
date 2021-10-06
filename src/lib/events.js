const eventListeners = new WeakMap();

export const addEventListener = (element, type, handler) => {
  element.addEventListener(type, handler);
  if (!eventListeners.has(element)) {
    eventListeners.set(element, []);
  }
  eventListeners.set(element, [
    ...eventListeners.get(element),
    [type, handler],
  ]);
};

export const removeAllEventListeners = (element) => {
  if (!eventListeners.has(element)) return;
  for (let [type, handler] of eventListeners.get(element)) {
    element.removeEventListener(type, handler);
  }
};
