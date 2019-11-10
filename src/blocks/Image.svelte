<script>
  import { onMount } from 'svelte';

  let ImageBro;

  onMount(async () => {
    const module = await import('./ImageBro.svelte');
    ImageBro = module.default;
  });
</script>

<svelte:component this="{ImageBro}" />
