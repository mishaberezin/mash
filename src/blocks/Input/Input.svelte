<script context="module">
  let counter = 0;
  const getUniqId = () => `input_${counter++}`;
</script>

<script>
  import navigo from "../../fonts/navigo.css";
  import SvgText from "../SvgText.svelte";
  import Textarea from "./Textarea.svelte";
  import Filearea from "./Filearea.svelte";

  let mix = "";
  export { mix as class };

  export let type = "text";
  export let label = "";

  const Control = {
    text: Textarea,
    file: Filearea
  }[type];

  let value = "";
  let isFocused = false;
  let isHovered = false;
  let isEnabled;

  $: isEnabled = isFocused || value !== "";

  const id = getUniqId();

  const onMouseenter = e => (isHovered = true);
  const onMouseleave = e => (isHovered = false);
  const onFocus = e => (isFocused = true);
  const onBlur = e => (isFocused = false);
  const onInput = e => {
    const { target } = e;
    const { clientHeight, scrollHeight } = target;

    value = target.value;

    let fontSize = parseInt(
      target.style.fontSize || getComputedStyle(target).fontSize
    );

    console.log("initial: " + fontSize);

    if (scrollHeight === clientHeight) {
      console.log("===");
      let guard = 300;
      while (guard && target.scrollHeight === clientHeight) {
        guard--;

        const nextSize = fontSize + 1;
        target.style.fontSize = nextSize + "px";

        if (target.scrollHeight === clientHeight) {
          fontSize = nextSize;
        } else {
          target.style.fontSize = fontSize + "px";
          break;
        }
      }
    } else if (scrollHeight > clientHeight) {
      console.log("> >");
      let guard = 300;
      while (guard && target.scrollHeight > clientHeight) {
        guard--;
        fontSize--;
        target.style.fontSize = fontSize + "px";
      }
    }

    console.log("new: " + fontSize);
  };
</script>

<style>
  .input {
    height: 100%;
    display: flex;
    overflow: hidden;
    background-color: transparent;
    position: relative;
    font-family: Navigo;
    transform: translateZ(0);
    transition: background-color 0.3s;
  }

  .input_enabled {
    background-color: #000;
  }

  .input__cell {
    position: relative;
    z-index: 0;
  }

  .input__cell_for_nameplate {
    width: 72px;
    height: 100%;
    margin-left: -72px;

    transition: margin-left 0.3s;
  }

  .input__cell_for_textarea {
    flex-grow: 1;
  }

  .input__nameplate {
    font-size: 180px;
    writing-mode: tb;
    width: 100%;
    height: 100%;
    fill: #fff;
    cursor: pointer;
    transform: rotate(180deg);
  }

  .input__label {
    pointer-events: none;
    font-size: 145px;
    fill: #000;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;
  }

  .input_enabled .input__label {
    display: none;
  }

  .input_hovered .input__cell_for_nameplate,
  .input_enabled .input__cell_for_nameplate {
    margin-left: 0;
  }
</style>

<div
  class="input {mix}"
  class:input_enabled={isEnabled}
  class:input_focused={isFocused}
  class:input_hovered={isHovered}
  on:mouseenter={onMouseenter}
  on:mouseleave={onMouseleave}
  on:change>
  <div class="input__cell input__cell_for_nameplate">
    <label for={id} class="input__nameplate">
      <SvgText text={label} x="50%" y="30" rect="190 900" />
    </label>
  </div>
  <div class="input__cell input__cell_for_textarea">
    <div class="input__label">
      <SvgText debug={false} text={label} x="30" rect="630 160" />
    </div>
    <Control
      {id}
      class="input__control"
      contenteditable="true"
      maxlength="200"
      spellcheck="false"
      on:focus={onFocus}
      on:blur={onBlur}
      on:input={onInput}
      on:change />
  </div>
</div>
