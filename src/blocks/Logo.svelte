<script>
  export let url = 'https://picsum.photos/128/128';

  $: style = `background-image: url('${url}');`;
</script>

<style>
  .logo {
    display: inline-block;
    position: relative;
  }
  .logo {
    /* background-image: url('./assets/logo.svg'); */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 120px;
    height: 120px;
  }
</style>

<div class="logo" {style}></div>
