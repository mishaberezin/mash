<script>
  import Textbox from "../blocks/Textbox.svelte";

  let headline = "Better Call Saul";
  let text =
    "He wasn't always Saul Goodman, ace attorney for chemist-turned-meth dealer Walter White. Six years before he begins to represent Albuquerque's most notorious criminal, Goodman is Jimmy McGill, a small-time attorney hustling to make a name for himself.";

  let showTextbox1 = true;
  let showTextbox2 = true;
  let showTextbox3 = true;
  let showTextbox4 = true;
  let showTextbox5 = true;
  let showTextbox6 = true;
  let showTextbox7 = true;
  let showTextbox8 = true;

  let headlineFontSize = 3; // em
  let headlineLineHeight = 1.6;
  let textFontSize = 1; // em
  let textLineHeight = 1.2;
  let marginSize = 1.2;

  $: textboxParams = {
    headlineFontSize,
    headlineLineHeight,
    textFontSize,
    textLineHeight,
    marginSize
  };
</script>

<style>
  @import "../fonts/open-sans.css";

  .stand {
    margin: 10px;
    margin-top: 40px;
  }

  .grid {
    --area-type-1: 1/1/1/1;
    --area-type-2: 1/2/2/4;
    --area-type-3: 1/4/2/7;
    --area-type-4: 1/7/2/10;
    --area-type-5: 2/1/4/1;
    --area-type-6: 2/2/4/4;
    --area-type-7: 2/4/4/7;
    --area-type-8: 2/7/4/10;

    width: 1310px;
    height: 512px;
    box-sizing: border-box;
    display: grid;
    grid-template: repeat(4, 128px) / repeat(10, 128px);
    grid-gap: 40px 20px;

    background-color: #fff;
    position: relative;

    margin-top: 30px;
  }

  .grid:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    background-image: repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 128px,
        rgba(0, 0, 0, 0.1) 128px,
        rgba(0, 0, 0, 0.1) 129px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0px,
        transparent 128px,
        rgba(0, 0, 0, 0.1) 128px,
        rgba(0, 0, 0, 0.1) 129px
      );

    display: none;
  }

  .grid__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .grid__item_type_1 {
    grid-area: var(--area-type-1);
    background-color: rgba(86, 0, 255, 0.3);
  }
  .grid__item_type_2 {
    grid-area: var(--area-type-2);
    background-color: rgba(0, 128, 0, 0.5);
  }
  .grid__item_type_3 {
    grid-area: var(--area-type-3);
    background-color: rgba(255, 192, 203, 0.3);
  }
  .grid__item_type_4 {
    grid-area: var(--area-type-4);
    background-color: rgba(81, 235, 252, 0.3);
  }
  .grid__item_type_5 {
    grid-area: var(--area-type-5);
    background-color: rgba(215, 119, 212, 0.3);
  }
  .grid__item_type_6 {
    grid-area: var(--area-type-6);
    background-color: rgba(255, 121, 121, 0.3);
  }
  .grid__item_type_7 {
    grid-area: var(--area-type-7);
    background-color: rgba(32, 28, 255, 0.3);
  }
  .grid__item_type_8 {
    grid-area: var(--area-type-8);
    background-color: rgba(255, 246, 121, 0.3);
  }

  .hidden {
    display: none;
  }

  .stand__cpanel {
    display: grid;
    --area-type-1: 1/1/3/3;
    --area-type-2: 1/3/3/6;
    --area-type-3: 1/6/2/10;
    --area-type-4: 1/7/2/10;
    --area-type-5: 2/1/4/1;
    --area-type-6: 2/2/4/4;
    --area-type-7: 2/4/4/7;
    --area-type-8: 2/7/4/10;

    width: 1310px;
    height: 100px;
    box-sizing: border-box;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(10, 1fr);
    grid-gap: 10px;
    background-color: #fff;
    position: relative;

    margin-bottom: 70px;
  }
  .textarea1 {
    grid-area: var(--area-type-1);
    resize: none;
  }
  .textarea2 {
    grid-area: var(--area-type-2);
    resize: none;
  }

  .checkboxes {
    grid-area: var(--area-type-3);
  }
</style>

<div class="stand">
  <div class="stand__cpanel">
    <textarea class="textarea1" bind:value={headline} />
    <textarea class="textarea2" bind:value={text} />
    <div class="checkboxes">
      <label>
        1:
        <input type="checkbox" bind:checked={showTextbox1} />
      </label>
      <label>
        2:
        <input type="checkbox" bind:checked={showTextbox2} />
      </label>
      <label>
        3:
        <input type="checkbox" bind:checked={showTextbox3} />
      </label>
      <label>
        4:
        <input type="checkbox" bind:checked={showTextbox4} />
      </label>
      <label>
        5:
        <input type="checkbox" bind:checked={showTextbox5} />
      </label>
      <label>
        6:
        <input type="checkbox" bind:checked={showTextbox6} />
      </label>
      <label>
        7:
        <input type="checkbox" bind:checked={showTextbox7} />
      </label>
      <label>
        8:
        <input type="checkbox" bind:checked={showTextbox8} />
      </label>
    </div>
    <div class="" />
    <div class="">
      <span>Заг font-size в em:</span>
      <input type="number" step="0.1" bind:value={headlineFontSize} />
    </div>
    <div class="">
      <span>Заг line-height в em:</span>
      <input type="number" step="0.1" bind:value={headlineLineHeight} />
    </div>
    <div class="">
      <span>Текст font-size в em:</span>
      <input type="number" step="0.1" bind:value={textFontSize} />
    </div>
    <div class="">
      <span>Текст line-height в em:</span>
      <input type="number" step="0.1" bind:value={textLineHeight} />
    </div>
    <div class="">
      <span>Расстояние в em:</span>
      <input type="number" step="0.1" bind:value={marginSize} />
    </div>
  </div>
  <div class="grid">
    <div class:hidden={!showTextbox1} class="grid__item grid__item_type_1">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox2} class="grid__item grid__item_type_2">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox3} class="grid__item grid__item_type_3">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox4} class="grid__item grid__item_type_4">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox5} class="grid__item grid__item_type_5">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox6} class="grid__item grid__item_type_6">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox7} class="grid__item grid__item_type_7">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
    <div class:hidden={!showTextbox8} class="grid__item grid__item_type_8">
      <Textbox {headline} {text} params={textboxParams} />
    </div>
  </div>
</div>
