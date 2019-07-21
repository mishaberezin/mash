import { writable } from 'svelte/store';

export const headline = writable('');
export const text = writable('');
export const logo = writable('');
export const picture = writable('');
export const headlinePlaceholder = writable('Headline La-la-la-la line');
export const textPlaceholder = writable(
  '55 Easy Ways To Write Headlines 55 Easy Ways To Write Headlines'
);
export const logoPlaceholder = writable('https://picsum.photos/100/50');
export const picturePlaceholder = writable('https://picsum.photos/400/200');
