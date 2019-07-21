<script>
  export let url = "";
  $: style = `background-image: url('${url}');`;
</script>

<style>
  .logo {
    display: inline-block;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 120px;
    height: 120px;
  }
</style>

<div class="logo" {style} />
