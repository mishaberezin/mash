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
    // isFocused = false;
  };

  const onInput = e => {
    const { target } = e;
    const { clientHeight, scrollHeight } = target;

    window.TARGET = target;

    console.log('clientHeight: ' + clientHeight);
    console.log('scrollHeight: ' + scrollHeight);
    console.log('style fontSize: ' + target.style.fontSize);
    console.log(
      'computed fontSize: ' + parseInt(getComputedStyle(target).fontSize)
    );

    let fontSize = parseInt(
      target.style.fontSize || getComputedStyle(target).fontSize
    );

    console.log('origFontSize: ' + fontSize);

    if (target.scrollHeight === clientHeight) {
      // ...
    } else {
      while (target.scrollHeight > clientHeight) {
        fontSize--;
        target.style.fontSize = fontSize + 'px';
      }
    }

    console.log('Result: ' + fontSize);

    // target.style.fontSize = fontSize + 'px';
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
    position: relative;
  }
  .field__label {
    width: 100%;
    transition: transform 0.2s;
    cursor: pointer;
  }

  .field_hovered:not(.field_focused) .field__label {
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
    font-size: 107px;
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

    display: flex;
    align-items: center;
  }
</style>

<div
  class="field"
  class:field_focused="{isFocused}"
  class:field_hovered="{isHovered}"
  on:mouseenter="{onMouseenter}"
  on:mouseleave="{onMouseleave}"
>
  <label for="{id}" class="field__label">
    <SvgText main="{label}"></SvgText>
  </label>
  <textarea
    class="field__control"
    id="{id}"
    contenteditable="true"
    spellcheck="false"
    on:focus="{onFocus}"
    on:blur="{onBlur}"
    on:input="{onInput}"
  ></textarea>
</div>
