const rangeInc = (start, end) => {
  const value = [];

  for (let i = start; i <= end; i++) {
    value.push(i);
  }

  return value;
};

const rangeDec = (start, end) => {
  const value = [];

  for (let i = start; i >= end; i--) {
    value.push(i);
  }

  return value;
};

export const range = (start, end) =>
  end >= start ? rangeInc(start, end) : rangeDec(start, end);
