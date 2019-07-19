<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import {
    headline,
    text,
    logo,
    picture,
    headlinePlaceholder,
    textPlaceholder,
    logoPlaceholder,
    picturePlaceholder
  } from "../stores/assets.js";
  import { layout } from "../stores/layout";

  import fragment from "svelte-fragment";
  import layouts from "../../lib/layouts.js";
  import { getPermutations } from "../../lib/utils.js";

  import Sample from "./Sample.svelte";
  import Ruler from "./Ruler.svelte";
  import TextBlock from "./TextBlock.svelte";
  import Logo from "./Logo.svelte";
  import Image from "./Image.svelte";
  import Unzoom from "./Unzoom.svelte";
  import Arrow from "./Arrow.svelte";

  import Group from "./Group.svelte";

  export let mix = "";

  const heyHeadline = $headline || $headlinePlaceholder;
  const heyText = $text || $textPlaceholder;
  const heyLogo = $logo || $logoPlaceholder;
  const heyPicture = $picture || $picturePlaceholder;

  const allPlacements = areas => {};

  const arrange = areas => {
    const keys = ["logo", "text", "image"];
    const permutations = getPermutations(areas);

    return permutations.map(([logo, text, image]) => ({
      logo: logo.join("/"),
      text: text.join("/"),
      image: image.join("/")
    }));
  };

  const arrangements = layouts.map((areas, i) => {
    return {
      name: `Layout #${i}`,
      permutations: arrange(areas)
    };
  });

  const onSampleClick = ({ detail }) => {
    $layout.permutation = detail;
    dispatch("next");
  };
</script>

<style>
  @import "../fonts/navigo.css";

  .section {
    width: 100%;
    min-height: 100%;
    font-family: Navigo;
    background: #000;
    padding: 0 28px;
    box-sizing: border-box;
  }

  .section__header {
    width: 100%;
    color: #fff;
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
    padding-top: 17px;
    fill: #fff;
  }
  .section__header-cell_for_title {
    grid-area: cell_2;
  }
  .section__header-cell_for_average {
    grid-area: cell_4;
  }
  .section__header-cell_for_dich {
    grid-area: cell_5;
  }

  .section__cell {
    position: relative;
  }

  .section__main {
    padding-bottom: 100px;
  }

  .section__group {
    margin-bottom: 72px;
  }

  .section__group:last-child {
    margin-bottom: 0;
  }
</style>

<section class="section section_name_layout {mix}">
  <header class="section__header">
    <div class="section__header-cell section__header-cell_for_back-button">
      <Arrow class="section__back-button" />
    </div>
    <div
      class="section__header-cell section__header-cell_for_title section__title">
      Layout Mash
    </div>
    <div
      class="section__header-cell section__header-cell_for_average
      section__average">
      Average
    </div>
    <div
      class="section__header-cell section__header-cell_for_dich section__dich">
      Dich
    </div>
  </header>
  <main class="section__main">
    {#each arrangements as arrangement}
      <div class="section__group">
        <Group
          permutations={arrangement.permutations}
          headline={heyHeadline}
          text={heyText}
          logo={heyLogo}
          picture={heyPicture}
          on:sampleClick={onSampleClick} />

        <!-- <Unzoom>
            <Ruler>
              <Sample model={true} arrangement={arrangement.permutations[0]}>
                <span slot="logo" />
                <span slot="text" />
                <span slot="image" />
              </Sample>
            </Ruler>
          </Unzoom>

          {#each arrangement.permutations as permutation}
            <Unzoom>
              <Sample
                arrangement={permutation}
                on:click={() => onSampleClick(permutation)}>
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
            </Unzoom>
          {/each}
          <div>🛸</div> -->
      </div>
    {/each}
  </main>
</section>
