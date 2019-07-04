import IndexPage from './IndexPage.svelte';

const app = new IndexPage({
  target: document.getElementById('app'),
  props: {
    name: 'Generate',
    items: [1, 2, 3, 4]
  }
});

export default app;
