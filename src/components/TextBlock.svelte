<script>
  export let title;
  export let paragraph;
</script>

<style>
  .text {
    font-family: 'Open Sans', sans-serif;
  }
  .text__title {
    font-size: 62px;
    font-weight: 800;
    margin: 0;
  }
  .text__paragraph {
    font-size: 22px;
  }
</style>

<div class="text">
  <h2 class="text__title">{title}</h2>
  <p class="text__paragraph">{paragraph}</p>
</div>
