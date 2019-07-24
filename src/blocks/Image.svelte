<script>
  export let type = "logo";
  export let url = "";
  $: style = `background-image: url('${url}');`;
</script>

<style>
  .image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
  }

  .image_type_logo {
    background-size: contain;
    background-position: top left;
  }

  .image_type_picture {
    background-size: cover;
    background-position: bottom;
  }
</style>

<div class="image image_type_{type}" {style} />
