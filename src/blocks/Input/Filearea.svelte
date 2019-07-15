<script>
  import { createEventDispatcher } from "svelte";

  export let id;

  const dispatch = createEventDispatcher();
  const FILE_SIZE_LIMIT = 2097152; // 2 MB

  let value = "";

  // $: previewSrc = `background-image: url("${value}")`;

  const onChange = e => {
    const file = e.target.files[0];

    if (file.size > FILE_SIZE_LIMIT) {
      throw new Error("File is too heavy");
    }

    const reader = new FileReader();

    reader.onload = e => {
      const base64 = window.btoa(e.target.result);

      if (base64) {
        value = `data:${file.type};base64,${base64}`;
      } else {
        value = "";
      }

      dispatch("value", value);
    };

    reader.readAsBinaryString(file);
  };
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
    background-size: contain;
  }

  .filearea__preview {
    height: 100%;
    border: 10px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    pointer-events: none;
  }

  .filearea__input {
    margin: 0;
    opacity: 0;
  }
</style>

<label class="filearea">
  {#if value}
    <img class="filearea__preview" src={value} />
  {/if}
  <input
    {id}
    class="filearea__input"
    type="file"
    accept="image/*"
    aria-label="Load your image"
    on:focus
    on:blur
    on:change={onChange} />
</label>
