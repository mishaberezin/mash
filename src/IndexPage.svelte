<script>
  import Item from './components/Item.svelte';

  export let name;
  export let items = [];

  console.log('===========================');
  console.log(items);
  console.log('===========================');
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="wrap">
  {#each items as item}
  <Item>{item}</Item>
  {/each}
</div>
