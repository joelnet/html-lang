const styleSheet = `
val,
if,
else,
while,
sub {
  display: none;
}
`;

export const injectStyleSheet = () => {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.textContent = styleSheet;

  document.head.appendChild(style);
};
