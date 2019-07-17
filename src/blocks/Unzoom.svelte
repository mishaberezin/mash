<script>
  export let ratio = 0.5;

  const width = 1024;
  const height = 512;

  $: wrapperStyle = `width: ${width * ratio}px; height: ${height * ratio}px;`;
  $: contentStyle = `transform: scale(${ratio});`;
</script>

<style>
  .unzoom {
    overflow: hidden;
  }

  .unzoom__content {
    transform-origin: top left;
  }
</style>

<div class="unzoom" style={wrapperStyle}>
  <div class="unzoom__content" style={contentStyle}>
    <slot />
  </div>
</div>
