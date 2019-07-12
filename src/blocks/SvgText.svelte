<script>
  export let x = "0";
  export let y = "90%";
  export let text = "";
  export let rect = "";
  export let theme = "normal";

  export let debug = false;

  const viewBox = rect ? `0 0 ${rect}` : null;
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    display: block;
    user-select: none;
  }

  .svg-text_theme_outline {
    stroke: #000;
    stroke-width: 4;
    fill: #fff;
  }

  .svg-text__text {
    dominant-baseline: auto;
  }

  .svg-text__viewbox {
    display: none;
    stroke-width: 0;
    fill: rgba(194, 231, 255, 0.5);
  }
  .svg-text_debug .svg-text__viewbox {
    display: block;
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="svg-text svg-text_theme_{theme}"
  class:svg-text_debug={debug}
  preserveAspectRatio="xMinYMax meet"
  {viewBox}>
  <rect class="svg-text__viewbox" width="100%" height="100%" />
  <text {x} {y} class="svg-text__text">{text}</text>
</svg>
