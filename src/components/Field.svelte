<script context="module">
  let counter = 0;
  const getUniqId = () => `field_${counter++}`;
</script>

<script>
  import SvgText from './SvgText.svelte';

  export let label = 'Noname';
  export let type = 'text';

  const id = getUniqId();

  let isFocused = false;
  let isHovered = false;

  const onMouseenter = e => {
    isHovered = true;
  };

  const onMouseleave = e => {
    isHovered = false;
  };

  const onFocus = e => {
    isFocused = true;
    isHovered = false;
  };

  const onBlur = e => {
    console.log('=BLUR==========================');
    console.log(e);
    console.log('===========================');
    isFocused = false;
  };
</script>

<style>
  .field {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    width: 100%;
    display: flex;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
  }
  .field__label {
    width: 100%;
    transition: transform 0.2s;
    cursor: pointer;
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
  }

  .field_focused .field__control {
    flex-grow: 1;
  }

  .field__control {
    font-size: 22px;
    position: relative;
  }

  .field__textarea {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

<div
  class="field"
  class:field_focused="{isFocused}"
  class:field_hovered="{isHovered}"
>
  <label
    for="{id}"
    class="field__label"
    on:mouseenter="{onMouseenter}"
    on:mouseleave="{onMouseleave}"
  >
    <SvgText main="{label}"></SvgText>
  </label>
  <div class="field__control">
    <textarea
      class="field__textarea"
      id="{id}"
      spellcheck="false"
      on:focus="{onFocus}"
      on:blur="{onBlur}"
    ></textarea>
  </div>
</div>
