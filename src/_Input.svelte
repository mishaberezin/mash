<script context="module">
  let counter = 0;
  const getUniqId = () => `FormField_${counter++}`;
</script>

<script>
  import navigo from "./fonts/navigo.css";

  import SvgText from "./blocks/SvgText.svelte";
  import Textfit from "./blocks/Textfit.svelte";

  export let label = "Headline";

  let madmode = false;

  let value = "";
  let isFocused = false;
  let isHovered = false;
  let isEnabled;
  $: isEnabled = isFocused || value !== "";

  const id = getUniqId();

  const onMouseenter = e => (isHovered = true);
  const onMouseleave = e => (isHovered = false);
  const onFocus = e => {
    isFocused = true;
  };
  const onBlur = e => {
    isFocused = false;
  };

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
      let guard = 100;
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
      let guard = 100;
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
  :global(body) {
    background-color: #666;
  }

  .wrap {
    margin: 100px auto 0 auto;
    height: 20vh;
    min-height: 150px;
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .wrap_madmode .form-field__control {
    transition: font-size 0.1s 0.1s;
  }

  .form-field {
    height: 100%;
    display: flex;
    overflow: hidden;
    background-color: transparent;
    position: relative;
    padding-right: 100px;
    font-family: Navigo;
    transform: translateZ(0);

    transition: background-color 0.2s;
  }

  .form-field_enabled {
    background-color: #000;
  }

  .form-field__cell {
    position: relative;
    z-index: 0;
  }

  .form-field__cell_for_nameplate {
    width: 72px;
    height: 100%;
    margin-left: -72px;

    transition: margin-left 0.2s;
  }

  .form-field__cell_for_textarea {
    flex-grow: 1;
  }

  .form-field__nameplate {
    font-size: 180px;
    writing-mode: tb;
    width: 100%;
    height: 100%;
    fill: #fff;
    fill: #666;
    cursor: pointer;
    transform: rotate(180deg);
  }

  .form-field__label {
    pointer-events: none;
    font-size: 180px;
    fill: #000;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;
  }

  .form-field_enabled .form-field__label {
    display: none;
  }

  .form-field_hovered .form-field__cell_for_nameplate,
  .form-field_enabled .form-field__cell_for_nameplate {
    margin-left: 0;
  }

  .form-field__control {
    background-color: transparent;
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
    margin-left: 20px;
    color: #fff;
    font-size: 50px;
    line-height: 15vh;
    /* padding: 5px;
    padding-top: 10px; */
    width: 100%;
    line-height: 1.2em;

    cursor: pointer;
  }

  .form-field_enabled .form-field__control {
    cursor: text;
  }
</style>

<label for="madmode">
  Mad mode (try to type something)
  <input id="madmode" type="checkbox" bind:checked={madmode} />
</label>
<div class="wrap" class:wrap_madmode={madmode}>
  <div
    class="form-field"
    class:form-field_enabled={isEnabled}
    class:form-field_focused={isFocused}
    class:form-field_hovered={isHovered}
    on:mouseenter={onMouseenter}
    on:mouseleave={onMouseleave}
    on:change>
    <div class="form-field__cell form-field__cell_for_nameplate">
      <label for={id} class="form-field__nameplate">
        <SvgText text={label} x="50%" y="30" rect="190 900" />
      </label>
    </div>
    <div class="form-field__cell form-field__cell_for_textarea">
      <div class="form-field__label">
        <SvgText text={label} x="30" rect="790 190" />
      </div>
      <textarea
        {id}
        class="form-field__control"
        contenteditable="true"
        maxlength="200"
        spellcheck="false"
        on:focus={onFocus}
        on:blur={onBlur}
        on:input={onInput}
        on:change />
    </div>
  </div>
</div>
