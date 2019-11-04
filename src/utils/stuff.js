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

export const preloadImage = (...urls) => {
  for (const url of urls) {
    const img = new Image();
    img.src = url;
  }
};

export const urlToB64Async = async url => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const base64Flag = 'data:image/jpeg;base64,';
  const bytes = Array.from(new Uint8Array(buffer));
  const binary = bytes.reduce((acc, b) => acc + String.fromCharCode(b), '');

  return base64Flag + btoa(binary);
};
