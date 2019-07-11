<script>
  export let x = "0";
  export let y = "90%";
  export let text = "";
  export let rect = "";
  export let theme = "normal";

  const viewBox = rect ? `0 0 ${rect}` : null;
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    user-select: none;
  }

  .svg-text_theme_outline {
    paint-order: stroke;
    stroke: #000;
    stroke-width: 2px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    fill: #fff;
  }

  .svg-text__text {
    dominant-baseline: auto;
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="svg-text svg-text_theme_{theme}"
  preserveAspectRatio="xMinYMax meet"
  {viewBox}>
  <text {x} {y} class="svg-text__text">{text}</text>
</svg>
