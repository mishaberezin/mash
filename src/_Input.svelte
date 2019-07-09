<script context="module">
  let counter = 0;
  const getUniqId = () => `FormField_${counter++}`;
</script>

<script>
  import globalcss from "./global.css";
  import normalize from "normalize.css";
  import navigo from "./fonts/navigo.css";

  import SvgText from "./components/SvgText.svelte";
  import Textfit from "./components/Textfit.svelte";

  export let label = "Headline";
  export let type = "text";

  const id = getUniqId();

  let isFocused = false;
  let isHovered = false;

  let labelStyle = "";

  const onMouseenter = e => (isHovered = true);
  const onMouseleave = e => (isHovered = false);
  const onFocus = e => {
    isFocused = true;
  };
  const onBlur = e => {
    // isFocused = false;
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
        target.style.fontSize = fontSize + "px";
      }
    }
  };
</script>

<style>
  :global(body) {
    background-color: #666;
  }

  .wrap {
    margin: 100px 0 0 0;
    height: 20vh;
    background-color: #fff;
  }

  .form-field {
    height: 100%;
    display: flex;
    background-color: transparent;
    position: relative;

    transition: background-color 0.2s;
    padding-right: 100px;
    font-family: Navigo;
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
    width: calc(100% - 50px);
  }

  .form-field__label {
    width: 100%;
    height: 100%;
    transition: transform 0.2s;
    cursor: pointer;
    width: 100%;
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
    fill: white;

    width: 20vh;
    height: 50px;
    transform: rotate(-90deg);
    transform-origin: left bottom;
    fill: white;
    margin-left: 50px;
    /* margin-bottom: -100px; */
    position: absolute;
    bottom: 0;
  }

  .field__control {
    background-color: transparent;
    width: 0;
    outline: none;
    border: 0;
    resize: none;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 5px;
    color: #fff;
    font-size: 40px;
    padding: 5px;
  }

  .form-field_focused .field__control {
    border: 2px dashed #fff;
    width: 100%;
  }
</style>

<div class="wrap">
  <div
    class="form-field"
    class:form-field_focused={isFocused}
    class:form-field_hovered={isHovered}
    on:mouseenter={onMouseenter}
    on:mouseleave={onMouseleave}
    on:change>
    <div class="form-field__item form-field__item_for_label" style={labelStyle}>
      <label for={id} class="form-field__label">
        <SvgText text={label} rect="790 190" size="190" />
      </label>
    </div>
    <div class="form-field__item form-field__item_for_control">
      <textarea
        {id}
        class="field__control"
        contenteditable="true"
        spellcheck="false"
        on:focus={onFocus}
        on:blur={onBlur}
        on:input={onInput}
        on:change />
    </div>
  </div>
</div>
