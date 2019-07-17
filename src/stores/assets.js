import { writable } from 'svelte/store';

export const headline = writable('');
export const text = writable('');
export const logo = writable('');
export const picture = writable('');
export const headlinePlaceholder = writable('Headline');
export const textPlaceholder = writable('55 Easy Ways To Write Headlines');
export const logoPlaceholder = writable('https://via.placeholder.com/100x50');
export const picturePlaceholder = writable(
  'https://via.placeholder.com/400x200'
);
