export const getPrevMargin = (value: number): number => {
  let margin: number = value;

  if (margin === 0) {
    margin = margin + 10;
  } else if (margin === 15) {
    margin = 0;
  } else {
    margin = margin + 2;
  }

  return margin;
};

export const getNextMargin = (value: number): number => {
  let margin: number = value;

  if (margin === -10) {
    margin = 0;
  } else if (margin === 0) {
    margin = margin + 7;
  } else {
    margin = margin + 5;
  }

  return margin;
};
