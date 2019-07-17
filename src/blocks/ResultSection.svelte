<script>
  import html2canvas from "html2canvas";
  import { saveAs } from "file-saver";
  import { headline, text, logo, picture } from "../stores/assets.js";
  import { layout } from "../stores/layout";

  import fragment from "svelte-fragment";

  import Sample from "./Sample.svelte";
  import TextBlock from "./TextBlock.svelte";
  import Unzoom from "./Unzoom.svelte";
  import Logo from "./Logo.svelte";
  import Image from "./Image.svelte";
  import Arrow from "./Arrow.svelte";

  export let mix = "";

  const mcLogoUrl = $logo;
  const cyborgImageUrl = $picture;
  const permutation = $layout.permutation;

  let sample;

  const onDownloadClick = () => {
    console.log("clicked");

    html2canvas(sample).then(canvas => {
      canvas.toBlob(function(blob) {
        saveAs(blob, "screenshot.png");
      });

      // document.body.appendChild(canvas);
    });
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

  .section__back-button {
    background-image: url("../assets/arrow-back.svg");
    background-repeat: no-repeat;
    background-size: auto;
    width: 100%;
    height: 100%;
    margin-top: -9px;
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
    background-color: rgb(155, 125, 125);
  }

  .section__main-cell_for_download {
    font-size: 100px;
    font-size: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
</style>

<section class="section section_name_result {mix}">
  <header class="section__header">
    <div class="section__header-cell section__header-cell_for_back-button">
      <Arrow class="section__back-button" />
    </div>
    <div
      class="section__header-cell section__header-cell_for_title section__title">
      Layout Mash
    </div>
    <div
      class="section__header-cell section__header-cell_for_intuition
      section__intuition">
      Intuition
    </div>
    <div class="section__header-cell section__header-cell_for_mnt section__mnt">
      MNT
    </div>
  </header>
  <main class="section__main">
    <div class="section__main-cell section__main-cell_for_sample">
      <Unzoom ratio={0.8}>
        <div bind:this={sample}>
          <Sample arrangement={permutation}>
            <template use:fragment slot="logo" let:data>
              <Logo url={mcLogoUrl}>🏝</Logo>
            </template>
            <template use:fragment slot="text" let:data>
              <TextBlock headline={$headline} paragraph={$text} />
            </template>
            <template use:fragment slot="image" let:data>
              <Image url={cyborgImageUrl}>🏝</Image>
            </template>
          </Sample>
        </div>
      </Unzoom>
    </div>
    <div
      class="section__main-cell section__main-cell_for_download"
      on:click={onDownloadClick}>
      Download
    </div>
  </main>
</section>
