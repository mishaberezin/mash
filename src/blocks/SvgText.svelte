<script>
  export let x = "0";
  export let y = "100%";
  export let dx = "0";
  export let dy = "0";
  export let text = "";
  export let theme = "normal";
  export let vbh = "200";
  export let vbw = "1000";

  const viewBox = `0 0 ${vbw} ${vbh}`;
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    display: block;
  }

  .svg-text_theme_outline {
    stroke: #000;
    stroke-width: 4;
    fill: #fff;
  }

  .svg-text__viewbox {
    display: none;
    stroke-width: 0;
    fill: rgba(194, 231, 255, 0.5);
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="svg-text svg-text_theme_{theme}"
  preserveAspectRatio="xMinYMax meet"
  {viewBox}>
  <rect class="svg-text__viewbox" width="100%" height="100%" />
  <text class="svg-text__text" {x} {y} {dx} {dy}>{text}</text>
</svg>
