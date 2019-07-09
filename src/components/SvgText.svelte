<script>
  export let main = ''; // temp
  export let text = '';
  export let misc = '';
  export let rect = '800 170';
  export let size = 30;
  export let theme = 'normal';

  const style = `font-size: ${size}px`;
  const viewBox = `0 0 ${rect}`;
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    font-family: Navigo;
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
  .svg-text__misc {
    font-size: 28px;
  }

  .svg-text__rect {
    fill: rosybrown;
  }
</style>

<svg
  class="svg-text svg-text_theme_{theme}"
  height="100%"
  preserveAspectRatio="xMinYMax meet"
  {viewBox}
  xmlns="http://www.w3.org/2000/svg"
  {style}
>
  <!-- <rect class="svg-text__rect" x="0" y="0" width="100%" height="100%" /> -->
  <text x="0" y="90%" class="svg-text__text">
    {text} {#if misc}
    <tspan dx="20px" dy="-70%" class="svg-text__misc">{misc}</tspan>
    {/if}
  </text>
</svg>
