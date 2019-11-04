<script context="module">
  export async function preload(page, session) {
    const { uuid } = page.params;

    // console.log();

    // var storage = firebase.storage();
    // var pathReference = storage.ref(`test/${id}.png`);
    // pathReference.getDownloadURL().then(url => (imageUrl = url));

    return { uuid };
  }
</script>
<script>
  export let uuid;

  import { onMount } from 'svelte';
  import { storage } from '../vendor/firebase';

  let imageUrl;

  onMount(() => {
    var pathReference = storage.ref(`test/${uuid}.png`);
    pathReference.getDownloadURL().then(url => (imageUrl = url));
  });
</script>

<img src="{ imageUrl }" alt="alt" />
