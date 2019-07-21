<script>
  export let url = "";
  $: style = `background-image: url('${url}');`;
</script>

<style>
  .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<div class="image" {style} />
