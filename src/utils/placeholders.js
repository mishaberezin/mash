export const getRandomImageUrl = ({ width = 100, height }) => {
  return `https://picsum.photos/seed/${Math.random()}/${width}/${height ||
    width}`;
};

export const getRandomHeadline = () => {
  return 'Headline';
};

export const getRandomParagraph = () => {
  return '55 Easy Ways To Write Headlines';
};

export const placeholders = {
  getRandomImageUrl,
  getRandomHeadline,
  getRandomParagraph
};
