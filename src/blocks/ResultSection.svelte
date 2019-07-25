<script>
  import { createEventDispatcher } from "svelte";
  import html2canvas from "html2canvas";
  import { saveAs } from "file-saver";
  import {
    layout,
    headline,
    text,
    logo,
    picture,
    headlinePlaceholder,
    textPlaceholder,
    logoPlaceholder,
    picturePlaceholder
  } from "../store.js";

  import fragment from "svelte-fragment";

  import Sample from "./Sample.svelte";
  import Zoom from "./Zoom.svelte";
  import Logo from "./Logo.svelte";
  import Image from "./Image.svelte";
  import Arrow from "./Arrow.svelte";

  export let mix = "";

  const dispatch = createEventDispatcher();

  const heyHeadline = $headline || $headlinePlaceholder;
  const heyText = $text || $textPlaceholder;
  const heyLogo = $logo || $logoPlaceholder;
  const heyPicture = $picture || $picturePlaceholder;

  const permutation = $layout.permutation;

  let sample;
  const onDownloadClick = () => {
    // https://github.com/niklasvh/html2canvas/issues/117
    window.scrollTo(0, 0);

    html2canvas(sample, {
      scale: 1
    }).then(canvas => {
      canvas.toBlob(function(blob) {
        saveAs(blob, "screenshot.png");
      });
    });
  };

  const onArrowClick = () => {
    dispatch("back");
  };

  const onHomeClick = () => {
    dispatch("home");
  };
</script>

<style>
  @import "../fonts/navigo.css";

  .section {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Navigo;
    background: #fff;
    padding: 0 28px;
    box-sizing: border-box;
  }

  .section__header {
    width: 100%;
    color: #000;
    font-size: 34px;
    font-weight: bold;
    display: grid;
    grid-template: minmax(120px, 20vh) / repeat(5, 1fr);
    grid-template-areas: "cell_1 cell_2 cell_3 cell_4 cell_5";
    grid-column-gap: 20px;
  }

  .section__header-cell {
    padding-top: 26px;
  }

  .section__header-cell_for_back-button {
    grid-area: cell_1;
  }
  .section__header-cell_for_title {
    grid-area: cell_2;
  }
  .section__header-cell_for_intuition {
    grid-area: cell_4;
  }
  .section__header-cell_for_mnt {
    grid-area: cell_5;
  }

  .section__title {
    cursor: pointer;
  }

  .section__main {
    display: flex;
    border: 7px solid #000;
    border-bottom: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }

  .section__main-cell_for_sample {
    border-bottom: 7px solid #000;
  }

  .section__main-cell_for_download {
    font-size: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;
  }

  .section__main-cell_for_download:hover {
    transform: scale(1.05);
  }

  .section__main-cell_for_download:active {
    transform: scale(1);
  }

  .credits__link {
    display: inline-block;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }

  .credits__link-anchor {
    display: inline-block;
    transform: translateX(0);
    transition: transform 0.2s;
  }

  .credits__link:hover .credits__link-anchor {
    transform: translateX(14px);
  }
</style>

<section class="section section_name_result {mix}">
  <header class="section__header">
    <div class="section__header-cell section__header-cell_for_back-button">
      <Arrow on:click={onArrowClick} />
    </div>
    <div
      class="section__header-cell section__header-cell_for_title section__title"
      on:click={onHomeClick}>
      Layout Mash
    </div>
    <div
      class="section__header-cell section__header-cell_for_intuition
      section__intuition">
      <a
        class="credits__link credits__link_type_park"
        href="https://intuition.team/park">
        <span class="credits__link-anchor">Intuition</span>
      </a>
    </div>
    <div class="section__header-cell section__header-cell_for_mnt section__mnt">
      <a
        class="credits__link credits__link-author"
        href="https://github.com/mishaberezin/mash">
        <span class="credits__link-anchor" title="Misha Berezin">M</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="http://nellykam.space">
        <span class="credits__link-anchor" title="Nelly Kam">N</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="https://www.behance.net/29ine">
        <span class="credits__link-anchor" title="Anatolie Micaliuc">T</span>
      </a>
    </div>
  </header>
  <main class="section__main">
    <div class="section__main-cell section__main-cell_for_sample">
      <Zoom>
        <div bind:this={sample}>
          <Sample
            arrangement={permutation}
            headline={heyHeadline}
            text={heyText}
            logo={heyLogo}
            picture={heyPicture} />
        </div>
      </Zoom>
    </div>
    <div
      class="section__main-cell section__main-cell_for_download"
      on:click={onDownloadClick}>
      Download
    </div>
  </main>
</section>
