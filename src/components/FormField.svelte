<script context="module">
  let counter = 0;
  const getUniqId = () => `field_${counter++}`;
</script>

<script>
  import SvgText from './SvgText.svelte';

  export let label = 'Noname';
  export let isFocused = false;

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
    console.log('===========================');
    console.log('onFocus');
    console.log('===========================');
    isFocused = true;
    isHovered = false;
  };

  const onBlur = e => {
    isFocused = false;
  };
</script>

<style>
  .form-field {
    height: 100%;
    /* width: 100%; */
    display: flex;
    background-color: transparent;
    transition: background-color 0.2s;
    position: relative;
  }

  .form-field__item {
    position: relative;
  }

  .form-field__item_for_label {
    width: 100%;
  }

  .form-field__item_for_control {
    width: 0;
  }

  .form-field__label {
    width: 100%;
    transition: transform 0.2s;
    cursor: pointer;
    height: 100%;
    width: 100%;
    /* position: absolute; */
    /* top: 0; */
    display: block;
  }

  .form-field_hovered .form-field__label {
    transform: translateX(30px);
  }

  .form-field_focused {
    background-color: #000;
  }

  .form-field_focused .form-field__label {
    flex-grow: 0;
    fill: #fff;
    opacity: 0.2;
    transform: translateX(0);
  }

  .form-field_focused .form-field__item_for_label {
    flex-grow: 1;
  }
</style>

<div
  class="form-field"
  class:field_focused="{isFocused}"
  class:field_hovered="{isHovered}"
  on:mouseenter="{onMouseenter}"
  on:mouseleave="{onMouseleave}"
  on:change
>
  <div class="form-field__item form-field__item_for_label">
    <label for="{id}" class="form-field__label">
      <SvgText main="{label}"></SvgText>
    </label>
  </div>
  <div class="form-field__item form-field__item_for_control">
    <slot></slot>
  </div>
</div>
