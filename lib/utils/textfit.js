export const boundRound = ({ min, max, cur }) => {
  return Math.min(max, Math.max(min, cur));
};

export const pingPong = (checker, callback, { min, max, cur }) => {
  cur = boundRound({ min, max, cur });

  let guard = 100;

  do {
    if (!guard--) {
      throw new Error('Bad day for a binary search. Something went wrong.');
    }

    if (checker()) {
      max = cur;
      cur = max - Math.ceil((max - min) / 2);
    } else {
      min = cur;
      cur = min + Math.floor((max - min) / 2);
    }

    callback(cur);
  } while (max - min > 1);

  return cur;
};

export const getFontSize = elem => {
  return parseInt(getComputedStyle(elem).fontSize);
};

export const textfit = (elem, { min = 14, max = 300 } = {}) => {
  if (!(elem instanceof Element)) {
    return;
  }

  pingPong(
    () => {
      return (
        elem.scrollHeight > elem.clientHeight ||
        elem.scrollWidth > elem.clientWidth
      );
    },
    size => (elem.style.fontSize = size + 'px'),
    { min, max, cur: getFontSize(elem) }
  );
};
