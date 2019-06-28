import IndexPage from './IndexPage.svelte';
import index from '../lib/index.js';

const app = new Page({
  target: document.body,
  props: {
    name: 'world',
    items: [1, 2, 3, 4]
  }
});

export default app;
