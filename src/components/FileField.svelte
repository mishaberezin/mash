<script context="module">
  let counter = 0;
  const getUniqId = () => `FileField_${counter++}`;
</script>

<script>
  import SvgText from './SvgText.svelte';

  export let label = 'Noname';

  const id = getUniqId();

  let isFocused = false;
  let isHovered = false;

  const onMouseenter = e => (isHovered = true);
  const onMouseleave = e => (isHovered = false);
  const onFocus = e => (isFocused = true);
  const onBlur = e => (isFocused = false);
</script>

<style>
  .field {
    height: 100%;
    width: 100%;
    background-color: transparent;
    transition: background-color 0.2s;
    position: relative;
  }
  .field__label {
    /* width: 100%; */
    transition: transform 0.2s;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .field_hovered .field__label {
    transform: translateX(30px);
  }

  .field_focused {
    background-color: #000;
  }

  .field_focused .field__label {
    flex-grow: 0;
    fill: #fff;
    opacity: 0.2;
    transform: translateX(0);
  }

  .field_focused .field__control {
    flex-grow: 1;
  }

  .field__control {
    display: none;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    resize: none;
    width: 100%;
    display: block;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;

    border: 5px dashed #fff;

    display: flex;
    align-items: center;
  }

  .field_focused .field__control {
    display: block;
  }

  .field__input {
    /* visibility: hidden; */
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>

<div
  class="field"
  class:field_focused="{isFocused}"
  class:field_hovered="{isHovered}"
  on:mouseenter="{onMouseenter}"
  on:mouseleave="{onMouseleave}"
>
  <label class="field__label" for="{id}">
    <SvgText main="{label}"></SvgText>
  </label>
  <div class="field__control"></div>
  <input
    type="file"
    name="file"
    class="field__input"
    id="{id}"
    accept="image/*"
    on:focus="{onFocus}"
    on:blur="{onBlur}"
  />
</div>
