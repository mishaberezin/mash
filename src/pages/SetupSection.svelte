<script context="module">
  import {
    getRandomImageUrl,
    getRandomHeadline,
    getRandomParagraph
  } from '../utils';

  const defaultHeadline = getRandomHeadline();
  const defaultParagraph = getRandomParagraph();
  const defaultLogo = getRandomImageUrl({ width: 150, height: 90 });
  const defaultPicture = getRandomImageUrl({ width: 400, height: 200 });
</script>

<script>
  import { headline, text, logo, picture } from '../store.js';
  import { createEventDispatcher } from 'svelte';

  import MegaButton from '../blocks/MegaButton.svelte';
  import SvgText from '../blocks/SvgText.svelte';
  import Input from '../blocks/Input/Input.svelte';
  import Credits from '../blocks/Credits.svelte';

  const dispatch = createEventDispatcher();

  let allDone = false;
  $: if (!allDone && $headline && $text && $logo && $picture) {
    allDone = true;
  }

  const onHeadlineValue = ({ detail }) => {
    $headline = detail;
  };

  const onTextValue = ({ detail }) => {
    $text = detail;
  };

  const onLogoValue = ({ detail }) => {
    $logo = detail;
  };

  const onPictureValue = ({ detail }) => {
    $picture = detail;
  };

  const onMegaButtonClick = () => {
    if (!$headline) {
      $headline = defaultHeadline;
    }
    if (!$text) {
      $text = defaultParagraph;
    }
    if (!$logo) {
      $logo = defaultLogo;
    }
    if (!$picture) {
      $picture = defaultPicture;
    }

    dispatch('next');
  };

  let showCredits = false;
  const onHeaderMouseenter = () => {
    showCredits = true;
  };
  const onHeaderMouseleave = () => {
    showCredits = false;
  };
</script>

<style>
  @import '../fonts/navigo.css';

  .section {
    --left-input-padding: 20px;
    --right-col-width: 50vh;
    --right-col-padding: 33.5vh;

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
    width: calc(100vh - 12px);
    height: calc(100vh - 12px);
    margin-top: -1px;
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
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  .section__credits {
    transition: opacity 0.3s;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  .section__header-svg {
    width: 100%;
    height: 100%;
    font-size: 186px;
    font-weight: bold;
    transition: transform 0.3s;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    padding-right: var(--right-col-padding);
    box-sizing: border-box;
  }

  .section__header_showcredits {
    padding-right: 0;
  }

  .section__header_showcredits .section__credits {
    opacity: 1;
  }

  :global(.section__Input) {
    padding-left: var(--left-input-padding);
    padding-right: var(--right-col-padding);
  }

  .section__cell_for_header {
    padding-left: 20px;
  }
</style>

<!-- Placeholders -->
<link rel="preload" href="{defaultLogo}" as="image" />
<link rel="preload" href="{defaultPicture}" as="image" />

<section class="section section_name_setup">
  <div class="section__cell section__cell_for_header section__cell_role_line">
    <div
      class="section__header"
      class:section__header_showcredits="{showCredits}"
      on:mouseenter="{onHeaderMouseenter}"
      on:mouseleave="{onHeaderMouseleave}"
    >
      <div class="section__header-svg">
        <SvgText text="Layout Mash" theme={showCredits ? 'outline-thin' :
        'outline'} vbw="1150" vbh="170" dy="-12" dx="1" />
      </div>
      <div class="section__credits">
        <Credits></Credits>
      </div>
    </div>
  </div>
  <div class="section__cell section__cell_for_headline section__cell_role_line">
    <Input class="section__Input" label="Headline" mainSvgTextProps={{ vbw: 1150 }}
    on:value={onHeadlineValue} />
  </div>
  <div class="section__cell section__cell_for_text section__cell_role_line">
    <Input class="section__Input" label="Text" mainSvgTextProps={{ vbw: 1150, dx: 14 }}
    on:value={onTextValue} />
  </div>
  <div class="section__cell section__cell_for_logo section__cell_role_line">
    <Input class="section__Input" type="file" label="Logo" mainSvgTextProps={{ vbw: 1150 }}
    on:value={onLogoValue} />
  </div>
  <div class="section__cell section__cell_for_picture section__cell_role_line">
    <Input class="section__Input" type="file" label="Picture"
    mainSvgTextProps={{ vbw: 1150 }}
    on:value={onPictureValue} />
  </div>
  <div class="section__cell section__cell_for_button">
    <div class="button-wrap">
      <MegaButton on:click="{onMegaButtonClick}" {allDone}>Generate</MegaButton>
    </div>
  </div>
</section>
