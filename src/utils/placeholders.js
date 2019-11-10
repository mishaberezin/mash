export const getRandomImageUrl = ({ width = 100, height }) => {
  return `https://picsum.photos/seed/${Math.random()}/${width}/${height ||
    width}`;
};

export async function getRandomImageB64(args) {
  const imageUrl = getRandomImageUrl(args);

  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64Flag = 'data:image/jpeg;base64,';
  const bytes = [].slice.call(new Uint8Array(buffer));
  const binary = bytes.reduce((acc, b) => acc + String.fromCharCode(b), '');
  const base64 = btoa(binary);

  return base64Flag + base64;
}

export const getRandomHeadline = () => {
  return 'Headline';
};

export const getRandomParagraph = () => {
  return '55 Easy Ways To Write Headlines';
};

export const placeholders = {
  getRandomImageUrl,
  getRandomHeadline,
  getRandomParagraph,
};
