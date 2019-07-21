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
  export let mainSvgTextProps = {};
  export let sideSvgTextProps = {};

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
    font-size: 30px;
    writing-mode: vertical-lr;
    width: 100%;
    height: 100%;
    fill: #fff;
    color: #fff;
    cursor: pointer;
    transform: rotate(180deg);
    user-select: none;
    text-anchor: end;
    dominant-baseline: text-after-edge;
    font-weight: bold;
    text-align: right;
    padding-bottom: 13px;
    padding-left: 18px;
    box-sizing: border-box;
  }

  @media (min-height: 1000px) {
    .input__nameplate {
      font-size: 26px;
    }
  }

  .input__label {
    pointer-events: none;
    font-size: 189px;
    fill: #000;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;
    user-select: none;
  }

  .input_enabled .input__label {
    display: none;
  }

  .input_hovered .input__cell_for_nameplate,
  .input_focused .input__cell_for_nameplate,
  .input_enabled .input__cell_for_nameplate {
    margin-left: 0;
  }
</style>

<div
  class="input input_type_{type}
  {mix}"
  class:input_enabled={isEnabled}
  class:input_focused={isFocused}
  class:input_hovered={isHovered}
  on:mouseenter={onMouseenter}
  on:mouseleave={onMouseleave}>
  <div class="input__cell input__cell_for_nameplate">
    <label for={id} class="input__nameplate">
      {label}
      <!-- <SvgText text={label} x="0" y="110%" dy="0" vbh="700" vbw="170" /> -->
    </label>
  </div>
  <div class="input__cell input__cell_for_textarea">
    <div class="input__label">
      <SvgText
        text={label}
        x="0"
        y="100%"
        dy="-13"
        vbh="170"
        vbw="800"
        {...mainSvgTextProps} />
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
