const config = [
  { name: 'logo', shape: 'square' },
  { name: 'text', shape: 'hrect' }
];
const step = 16;
const matrix = Array.from({ length: 32 }, () => 0);

const getRandom = items => {
  return items[Math.floor(Math.random() * items.length)];
};

const getSquareArea = size => {};

const getHrectArea = size => {};

const getArea = (shape, size) => {
  if (shape === 'square') {
    return [];

    return getSquareArea(size);
  } else {
    return getHrectArea(size);
  }
};

const results = [{ logo: [1, 1, 4, 4], text: [2, 4, 4, 8] }];

const arrange = () => {
  const sizes = [1, 4, 8];
  const areas = [];

  return getRandom(results);

  config.forEach(item => {
    const size = getRandom(sizes);
    areas.push(getArea(item.shape, size));
  });
};
