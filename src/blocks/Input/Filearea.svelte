<script>
  export let id;
</script>

<style>
  .filearea {
    height: 100%;
    width: 100%;
    background-color: transparent;
    position: relative;
    outline: none;
    border: 0;
    resize: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin-left: 20px;
    color: #fff;
    width: 100%;
    line-height: 1.2em;
    cursor: pointer;
  }

  .filearea__input {
    margin: 0;
    opacity: 0;
  }
</style>

<label class="filearea">
  <input
    {id}
    class="filearea__input"
    type="file"
    aria-label="Load your image"
    on:focus
    on:blur
    on:input />
  <span class="file-custom" />
</label>
