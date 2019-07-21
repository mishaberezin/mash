export const uidMakerFactory = (prefix, counter = 0) => () => {
  return prefix + counter++;
};

export const getRandomItem = items => {
  return items[Math.floor(Math.random() * items.length)];
};

export const shuffle = array => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const neverend = function*(arr) {
  for (let i = 0; true; i = (i + 1) % arr.length) {
    yield arr[i];
  }
};

export const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
