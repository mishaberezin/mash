import { writable, readable, derived } from 'svelte/store';

export const section = writable('setup');

export const headline = writable('');
export const text = writable('');
export const logo = writable('');
export const picture = writable('');

export const headlinePlaceholder = readable('Headline');
export const textPlaceholder = readable('55 Easy Ways To Write Headlines');

const logoPlaceholderUrl = 'https://picsum.photos/150/90';
export const logoPlaceholder = writable(logoPlaceholderUrl);

const picturePlaceholderUrl = 'https://picsum.photos/400/200';
export const picturePlaceholder = writable(picturePlaceholderUrl);

export const layout = writable({
  done: false,
  permutation: { image: '1/3/3/5', logo: '1/1/2/2', text: '2/1/3/3' }
});
