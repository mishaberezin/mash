<script>
  import { headline, text, logo, picture } from "../stores/assets.js";
  import { createEventDispatcher } from "svelte";
  import MegaButton from "./MegaButton.svelte";
  import FileField from "./FileField.svelte";
  import TextField from "./TextField.svelte";
  import FormField from "./FormField.svelte";
  import SvgText from "./SvgText.svelte";

  export let mix = "";

  const dispatch = createEventDispatcher();

  const onHeadlineChange = e => {
    $headline = e.target.value;
  };

  const onTextChange = e => {
    $text = e.target.value;
  };

  const onLogoChange = e => {
    // $logo = e.target.value;
  };

  const onPictureChange = e => {
    // $picture = e.target.value;
  };

  const onMegaButtonClick = e => {
    dispatch("next");
  };
</script>

<style>
  .section {
    --right-col-width: 33.5vh;

    height: 100%;
    display: grid;
    grid-template: repeat(5, 20vh) / 1fr var(--right-col-width);
  }

  .section__item {
    position: relative;
  }

  .section__item_for_header {
    grid-area: 1/1/2/3;
  }

  .section__item_for_headline {
    grid-area: 2/1/3/3;
  }

  .section__item_for_text {
    grid-area: 3/1/4/2;
  }

  .section__item_for_logo {
    grid-area: 4/1/5/2;
  }

  .section__item_for_picture {
    grid-area: 5/1/6/2;
  }

  .section__item_for_button {
    grid-area: 1/2/6/3;
    overflow: hidden;
  }

  .button-wrap {
    position: absolute;
    width: 120vh;
    height: 120vh;
    margin-top: -10vh;
    top: 0;
    left: 0;
  }

  .section__item_role_border {
    z-index: -1;
  }

  .section__item_role_border:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 7px;
    background-color: #000;
    z-index: -1;
    pointer-events: none;
  }

  .section__item_for_line1 {
    grid-area: 1/1/2/3;
  }
  .section__item_for_line2 {
    grid-area: 2/1/3/3;
  }
  .section__item_for_line3 {
    grid-area: 3/1/4/3;
  }
  .section__item_for_line4 {
    grid-area: 4/1/5/3;
  }

  .page__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 16px solid #000;
    border-left: 0;
    background-color: #fff;
  }

  .page__main-line {
    flex-grow: 1;
    min-height: 130px;
    /* border-bottom: 3px solid black; */
    box-sizing: border-box;
    position: relative;
  }

  .page__main-line_last {
    border-bottom: none;
  }

  .page__side {
    position: fixed;
    height: 140vh;
    width: 140vh;
    min-height: 700px;
    min-width: 700px;
    right: -100vh;
    top: -20vh;
  }
</style>

<section class="section section_name_setup {mix}">
  <div class="section__item section__item_for_header">
    <SvgText text="Layout Mash" size="190" theme="outline" />
  </div>
  <div class="section__item section__item_for_headline">
    <FormField label="Headline" on:change={onHeadlineChange} />
  </div>
  <div class="section__item section__item_for_text">
    <TextField label="Text" on:change={onTextChange} />
  </div>
  <div class="section__item section__item_for_logo">
    <FileField label="Logo" on:change={onLogoChange} />
  </div>
  <div class="section__item section__item_for_picture">
    <FileField label="Picture" on:change={onPictureChange} />
  </div>
  <div class="section__item section__item_for_button">
    <div class="button-wrap">
      <MegaButton on:click={onMegaButtonClick}>Generate</MegaButton>
    </div>
  </div>

  {#each [1, 2, 3, 4] as number}
    <div
      class="section__item section__item_role_border section__item_for_line{number}" />
  {/each}
</section>
