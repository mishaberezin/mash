<script>
  export let title;
  export let paragraph;
</script>

<style>
  .unzoom {
    overflow: hidden;
  }

  .unzoom__content {
    transform-origin: top left;
  }

  .unzoom_ratio_05 {
    width: 512px;
    height: 256px;
  }

  .unzoom_ratio_05 .unzoom__content {
    transform: scale(0.5);
  }

  .unzoom_ratio_025 {
    width: 256;
    height: 128px;
  }

  .unzoom_ratio_025 .unzoom__content {
    transform: scale(0.25);
  }
</style>

<div class="unzoom unzoom_ratio_05">
  <div class="unzoom__content"><slot></slot></div>
</div>
