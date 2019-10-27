<script context="module">
  export async function preload(page, session) {
    const { uuid } = page.params;
    return { id: uuid };
  }
</script>
<script>
  export let id;
  import { onMount } from 'svelte';
  let imageUrl = 'Ждем';

  onMount(() => {
    var storage = firebase.storage();
    var pathReference = storage.ref(`test/${id}.png`);
    pathReference.getDownloadURL().then(url => (imageUrl = url));
  });
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<img src="{ imageUrl }" />
