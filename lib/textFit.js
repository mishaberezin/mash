// export const

var pingPong = (checker, callback, { min, max, cur }) => {
  let memo;
  let guard = 30;
  do {
    memo = cur;
    if (checker()) {
      max = cur;
      cur = max - Math.floor((max - min) / 2);
    } else {
      min = cur;
      cur = min + Math.ceil((max - min) / 2);
    }

    callback(cur);
  } while (guard-- && cur !== memo);

  return cur;
};

var number = 56;
var results = [];
pingPong(
  () => number > 24,
  cur => {
    results.push(cur);
    number = cur;
  },
  {
    min: 3,
    max: 100,
    cur: 56
  }
);
console.log(results.join(' '));

export const textFit = (elem, { min = 14, max = 300 } = {}) => {
  const { clientHeight, scrollHeight } = elem;

  const fontSize = parseInt(
    elem.style.fontSize || getComputedStyle(elem).fontSize
  );

  if (fontSize < min) {
    elem.style.fontSize = min + 'px';
    return;
  }

  if (fontSize > max) {
    elem.style.fontSize = max + 'px';
    return;
  }

  pingPong(
    () => elem.scrollHeight > elem.clientHeight,
    size => (elem.style.fontSize = size + 'px'),
    { min, max, cur }
  );

  if (scrollHeight > clientHeight) {
    for (let i = fontSize; i >= min; i--) {
      elem.style.fontSize = i + 'px';

      if (elem.scrollHeight > clientHeight) {
      }
    }

    let guard = 300;
    while (guard && elem.scrollHeight > clientHeight) {
      guard--;
      fontSize--;
      elem.style.fontSize = fontSize + 'px';
    }
  }

  if (scrollHeight === clientHeight) {
    let guard = 300;
    while (guard && elem.scrollHeight === clientHeight) {
      guard--;

      const nextSize = fontSize + 1;
      elem.style.fontSize = nextSize + 'px';

      if (elem.scrollHeight === clientHeight) {
        fontSize = nextSize;
      } else {
        elem.style.fontSize = fontSize + 'px';
        break;
      }
    }
  } else if (scrollHeight > clientHeight) {
  }
};
