<script>
  import { onMount } from "svelte";
  import { textfit } from "../../lib/utils.js";

  export let headline;
  export let text;

  let textbox;

  onMount(() => {
    textfit(textbox, { min: 1, max: 300 });
  });
</script>

<style>
  @import "../fonts/open-sans.css";

  .textbox {
    display: block;
    width: 100%;
    height: 100%;

    font-family: "Open Sans", sans-serif;
    font-size: 20px;
  }

  .textbox__headline {
    font-size: 3em;
    line-height: 1.6em;
    font-weight: 800;
    margin: 0;
  }
  .textbox__text {
    font-size: 1em;
    line-height: 1.2em;
    margin: 0;
  }

  .textbox__headline ~ .textbox__text {
    margin-top: 1.2em;
  }
</style>

<div class="textbox" bind:this={textbox}>
  <h2 class="textbox__headline">{headline}</h2>
  <p class="textbox__text">{text}</p>
</div>
