<script context="module">
  let counter = 0;
  const getUniqId = () => `FormField_${counter++}`;
</script>

<script>
  import SvgText from './SvgText.svelte';
  import Textfit from './Textfit.svelte';

  export let label = '';
  export let type = 'text';

  const id = getUniqId();

  let isFocused = false;
  let isHovered = false;

  let labelStyle = '';

  const onMouseenter = e => (isHovered = true);
  const onMouseleave = e => (isHovered = false);
  const onFocus = e => {
    isFocused = true;
  };
  const onBlur = e => {
    //isFocused = false
  };
  const onInput = e => {
    const { target } = e;
    const { clientHeight, scrollHeight } = target;

    let fontSize = parseInt(
      target.style.fontSize || getComputedStyle(target).fontSize
    );

    if (target.scrollHeight === clientHeight) {
      // ...
    } else {
      while (target.scrollHeight > clientHeight) {
        fontSize--;
        target.style.fontSize = fontSize + 'px';
      }
    }
  };
</script>

<style>
  .form-field {
    height: 100%;
    display: flex;
    background-color: transparent;
    transition: background-color 0.2s;
    position: relative;

    padding-right: var(--right-col-width);
  }

  .form-field__item {
    position: relative;
    transition: width 0.2s;
  }

  .form-field__item_for_label {
    width: 100%;
  }
  .form-field_focused .form-field__item_for_label {
    width: 50px;
  }

  .form-field__item_for_control {
    width: 0;
  }
  .form-field_focused .form-field__item_for_control {
    width: auto;
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

    font-family: Navigo;
    font-size: 50px;
  }

  .form-field_hovered .form-field__label {
    transform: translateX(30px);
  }

  .form-field_focused {
    background-color: #000;
  }

  .form-field_focused .form-field__label {
    width: 20vh;
    height: auto;
    transform: rotate(-90deg) translateX(30px);
    transform-origin: 0 0;
  }

  .field__control {
    background-color: transparent;
  }
</style>

<div
  class="form-field"
  class:form-field_focused="{isFocused}"
  class:form-field_hovered="{isHovered}"
  on:mouseenter="{onMouseenter}"
  on:mouseleave="{onMouseleave}"
  on:change
>
  <div class="form-field__item form-field__item_for_label" style="{labelStyle}">
    <label for="{id}" class="form-field__label">
      <SvgText text="{label}" rect="790 190" size="190"></SvgText>
    </label>
  </div>
  <div class="form-field__item form-field__item_for_control">
    {#if type === 'text'}
    <textarea
      class="field__control"
      id="{id}"
      contenteditable="true"
      spellcheck="false"
      on:focus="{onFocus}"
      on:blur="{onBlur}"
      on:input="{onInput}"
      on:change
    ></textarea>
    {/if}
  </div>
</div>
