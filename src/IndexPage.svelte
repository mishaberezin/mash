<script>
  import normalize from 'normalize.css';
  import MegaButton from './components/MegaButton.svelte';

  export let name;
  export let items = [];
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<MegaButton>{name}</MegaButton>
