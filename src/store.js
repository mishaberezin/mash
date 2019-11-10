import { writable } from 'svelte/store';

export const section = writable('setup');

export const headline = writable('');
export const text = writable('');
export const logo = writable('');
export const picture = writable('');

export const layout = writable({
  text: '2/1/3/3',
  image: '1/3/3/5',
  logo: '1/1/2/2',
});
