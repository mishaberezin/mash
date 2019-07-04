<script>
  import Textfit from './Textfit.svelte';

  export let headline;
  export let paragraph;
</script>

<style>
  .text {
    font-family: 'Open Sans', sans-serif;
  }
  .text__headline {
    font-size: 62px;
    font-weight: 800;
    margin: 0;
  }
  .text__paragraph {
    font-size: 22px;
  }
</style>

<div class="text">
  <h2 class="text__headline"><Textfit>{headline}</Textfit></h2>
  <p class="text__paragraph"><Textfit>{paragraph}</Textfit></p>
</div>
