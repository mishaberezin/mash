<script>
  export let main = '';
  export let misc = '';
</script>

<style>
  .svg-text {
    width: 100%;
    height: 100%;
    font-family: Navigo;
    font-size: 50px;
    user-select: none;
  }

  .svg-text__text {
    font-size: 28px;
  }
  .svg-text__text-misc {
    font-size: 7px;
  }
</style>

<svg
  class="svg-text"
  height="100%"
  preserveAspectRatio="xMinYMin meet"
  viewBox="0 0 150 30"
  xmlns="http://www.w3.org/2000/svg"
>
  <text x="0" y="70%" dominant-baseline="middle" class="svg-text__text">
    {main} {#if misc}
    <tspan dx="5px" dy="-40%" class="svg-text__text-misc">{misc}</tspan>
    {/if}
  </text>
</svg>

<!--
<div class="svg-text">
  <svg
    class="svg-text__svg"
    height="100%"
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 150 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0" y="70%" dominant-baseline="middle" class="svg-text__text">
      {main} {#if misc}
      <tspan dx="5px" dy="-40%" class="svg-text__text-misc">{misc}</tspan>
      {/if}
    </text>
  </svg>
</div> -->
