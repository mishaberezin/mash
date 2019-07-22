<script>
  import { afterUpdate } from "svelte";
  import { textfit } from "../../lib/utils.js";

  export let params = {
    headlineFontSize: 3,
    headlineLineHeight: 1.6,
    textFontSize: 1,
    textLineHeight: 1.2,
    marginSize: 1.2
  };
  export let headline;
  export let text;

  $: style = [
    `--headline-font-size: ${params.headlineFontSize}em`,
    `--headline-line-height: ${params.headlineLineHeight}em`,
    `--text-font-size: ${params.textFontSize}em`,
    `--text-line-height: ${params.textLineHeight}em`,
    `--margin-size: ${params.marginSize}em`
  ].join(";");

  let textbox;

  // $: textfit(textbox, { min: 1, max: 300 });

  afterUpdate(() => {
    textfit(textbox, { min: 1, max: 300 });
  });

  setTimeout(() => {
    textfit(textbox, { min: 1, max: 300 });
  }, 300);
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
    font-size: var(--headline-font-size);
    line-height: 1.6em;
    line-height: var(--headline-line-height);
    font-weight: 800;
    margin: 0;
  }
  .textbox__text {
    font-size: 1em;
    font-size: var(--text-font-size);
    line-height: 1.2em;
    line-height: var(--text-line-height);
    margin: 0;
  }

  .textbox__headline ~ .textbox__text {
    margin-top: 1.2em;
    margin-top: var(--margin-size);
  }
</style>

<div class="textbox" bind:this={textbox} {style}>
  <h2 class="textbox__headline">{headline}</h2>
  <p class="textbox__text">{text}</p>
</div>
