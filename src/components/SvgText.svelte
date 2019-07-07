<script>
  export let main = '';
  export let misc = '';
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    font-family: Navigo;
    font-size: 191px;
    user-select: none;
  }

  .svg-text__main {
    dominant-baseline: auto;
  }
  .svg-text__misc {
    font-size: 28px;
  }
</style>

<svg
  class="svg-text"
  height="100%"
  preserveAspectRatio="xMinYMin meet"
  viewBox="0 0 800 170"
  xmlns="http://www.w3.org/2000/svg"
>
  <text x="0" y="90%" class="svg-text__main">
    {main} {#if misc}
    <tspan dx="20px" dy="-70%" class="svg-text__misc">{misc}</tspan>
    {/if}
  </text>
</svg>
