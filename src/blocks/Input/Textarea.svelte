<script>
  import textfit from "../../../lib/textfit.js";

  export let id;
</script>

<style>
  .textarea {
    height: 100%;
    width: 100%;
    background-color: transparent;
    transition: background-color 0.2s;
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
</style>

<textarea
  {id}
  class="textarea"
  contenteditable="true"
  spellcheck="false"
  on:focus
  on:blur
  on:input />
