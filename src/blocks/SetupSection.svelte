<script>
  import navigo from "../fonts/navigo.css";
  import { headline, text, logo, picture } from "../stores/assets.js";
  import { createEventDispatcher } from "svelte";
  import MegaButton from "./MegaButton.svelte";
  import SvgText from "./SvgText.svelte";
  import Input from "./Input/Input.svelte";

  let mix = "";
  export { mix as class };

  // const mainSvgTextProps = {
  //   rect: "1000 150",
  //   x: "0",
  //   y: "100%",
  //   dy: -12,
  //   size: 172
  // };

  const dispatch = createEventDispatcher();

  const onHeadlineValue = ({ detail }) => {
    $headline = detail;
  };

  const onTextValue = ({ detail }) => {
    $text = detail;
  };

  const onLogoValue = ({ detail }) => {
    console.log(detail);
    $logo = detail;
  };

  const onPictureValue = ({ detail }) => {
    $picture = detail;
  };

  const onMegaButtonClick = e => {
    dispatch("next");
  };
</script>

<style>
  .section {
    --right-col-width: 33.5vh;

    height: 100%;
    min-width: 600px;
    display: grid;
    grid-template: repeat(5, minmax(120px, 20%)) / 1fr var(--right-col-width);
    font-family: Navigo;
    border-top: 7px solid #000;
    box-sizing: border-box;
  }

  .section__cell {
    position: relative;
  }

  .section__cell_for_header {
    grid-area: 1/1/2/3;
  }

  .section__cell_for_headline {
    grid-area: 2/1/3/3;
  }

  .section__cell_for_text {
    grid-area: 3/1/4/3;
  }

  .section__cell_for_logo {
    grid-area: 4/1/5/3;
  }

  .section__cell_for_picture {
    grid-area: 5/1/6/3;
  }

  .section__cell_for_button {
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

  .section__cell_role_line {
    border-bottom: 7px solid #000;
    box-sizing: border-box;
  }

  .section__header {
    width: 100%;
    height: 100%;
    font-size: 190px;
    box-sizing: border-box;
    padding-right: var(--right-col-width);
  }

  :global(.section__Input) {
    padding-right: var(--right-col-width);
  }
</style>

<section class="section section_name_setup {mix}">
  <div class="section__cell section__cell_for_header section__cell_role_line">
    <div class="section__header">
      <SvgText
        text="Layout Mash"
        theme="outline"
        vbw="1150"
        vbh="170"
        dy="-12"
        dx="1" />
    </div>
  </div>
  <div class="section__cell section__cell_for_headline section__cell_role_line">
    <Input
      class="section__Input"
      label="Headline"
      mainSvgTextProps={{ vbw: 1150 }}
      on:value={onHeadlineValue} />
  </div>
  <div class="section__cell section__cell_for_text section__cell_role_line">
    <Input
      class="section__Input"
      label="Text"
      mainSvgTextProps={{ vbw: 1150, dx: 14 }}
      on:value={onTextValue} />
  </div>
  <div class="section__cell section__cell_for_logo section__cell_role_line">
    <Input
      class="section__Input"
      type="file"
      label="Logo"
      mainSvgTextProps={{ vbw: 1150 }}
      on:value={onLogoValue} />
  </div>
  <div class="section__cell section__cell_for_picture section__cell_role_line">
    <Input
      class="section__Input"
      type="file"
      label="Picture"
      mainSvgTextProps={{ vbw: 1150 }}
      on:value={onPictureValue} />
  </div>
  <div class="section__cell section__cell_for_button">
    <div class="button-wrap">
      <MegaButton on:click={onMegaButtonClick}>Generate</MegaButton>
    </div>
  </div>
</section>
