import { writable, readable, derived } from 'svelte/store';

export const screen = writable('setup');

export const headline = writable('');
export const text = writable('');
export const logo = writable('');
export const picture = writable('');

export const headlinePlaceholder = readable('Headline La-la-la-la');
export const textPlaceholder = readable('55 Easy Ways To Write Headlines');

const logoPlaceholderUrl = 'https://picsum.photos/100/50';
export const logoPlaceholder = writable(logoPlaceholderUrl);
fetch(logoPlaceholderUrl)
  .then(resp => resp.arrayBuffer())
  .then(buffer => {
    var base64Flag = 'data:image/jpeg;base64,';
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => (binary += String.fromCharCode(b)));
    const base64 = btoa(binary);

    logoPlaceholder.set(base64Flag + base64);
  });

const picturePlaceholderUrl = 'https://picsum.photos/400/200';
export const picturePlaceholder = writable(picturePlaceholderUrl);
fetch(picturePlaceholderUrl)
  .then(resp => resp.arrayBuffer())
  .then(buffer => {
    var base64Flag = 'data:image/jpeg;base64,';
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => (binary += String.fromCharCode(b)));
    const base64 = btoa(binary);

    picturePlaceholder.set(base64Flag + base64);
  });

export const layout = writable({
  done: false,
  permutation: { image: '1/3/3/5', logo: '1/1/2/2', text: '2/1/3/3' }
});
