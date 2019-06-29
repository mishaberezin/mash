<script>
  export let url = 'https://picsum.photos/200/400';

  $: style = `background-image: url('${url}');`;
</script>

<style>
  .image {
    display: inline-block;
    position: relative;
  }

  .image {
    /* background-image: url('./assets/image.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    /* opacity: 0.3; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<div class="image" {style}></div>
