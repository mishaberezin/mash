<script context="module">
  import { uidMakerFactory } from "../../../lib/utils.js";
  const getUniqId = uidMakerFactory("input_");
</script>

<script>
  import { createEventDispatcher } from "svelte";
  import navigo from "../../fonts/navigo.css";
  import SvgText from "../SvgText.svelte";
  import Textarea from "./Textarea.svelte";
  import Filearea from "./Filearea.svelte";

  let mix = "";
  export { mix as class };
  export let type = "text";
  export let label = "";

  const dispatch = createEventDispatcher();

  const typeMap = {
    text: Textarea,
    file: Filearea
  };
  const Control = typeMap[type];

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
  const onValue = ({ detail }) => {
    value = detail;
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
  on:mouseleave={onMouseleave}>
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
      on:value
      on:value={onValue} />
  </div>
</div>
