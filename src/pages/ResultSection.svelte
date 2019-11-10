<script>
  export let navigateBack, navigateHome;

  import { onMount } from 'svelte';
  import { urlToB64Async } from '../utils';

  import Sample from '../blocks/Sample.svelte';
  import Zoom from '../blocks/Zoom.svelte';
  import Logo from '../blocks/Logo.svelte';
  import Image from '../blocks/Image.svelte';
  import Arrow from '../blocks/Arrow.svelte';

  import { layout, headline, text, logo, picture } from '../store.js';

  let Sharing = null;

  onMount(async () => {
    Sharing = (await import('../blocks/Sharing.svelte')).default;
    console.log(Sharing);
  });
</script>

<style>
  @import '../fonts/navigo.css';

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

  .header {
    width: 100%;
    color: #000;
    font-size: 34px;
    font-weight: bold;
    display: grid;
    grid-template: minmax(120px, 20vh) / repeat(5, 1fr);
    grid-template-areas: 'cell_1 cell_2 cell_3 cell_4 cell_5';
    grid-column-gap: 20px;
  }

  .header__cell {
    padding-top: 26px;
  }

  .header__cell_for_back-button {
    grid-area: cell_1;
  }
  .header__cell_for_title {
    grid-area: cell_2;
  }
  .header__cell_for_intuition {
    grid-area: cell_4;
  }
  .header__cell_for_mnt {
    grid-area: cell_5;
    white-space: nowrap;
  }

  .title {
    cursor: pointer;
    white-space: nowrap;
  }

  .section__main {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }

  .section__main-cell_for_sample {
    flex-grow: 1;
    border: 7px solid #000;
    border-top: 0;
    border-bottom: 0;
  }

  .section__main-cell_for_sharing {
    border: 7px solid #000;
    box-sizing: border-box;
    width: 100%;
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

<section class="section section_name_result">
  <header class="section__header header">
    <div class="header__cell header__cell_for_back-button">
      <Arrow on:click="{navigateBack}"></Arrow>
    </div>
    <div class="header__cell header__cell_for_title" on:click="{navigateHome}">
      <span class="title">Layout Mash</span>
    </div>
    <div
      class="header__cell header__cell_for_intuition
      section__intuition"
    >
      <a
        class="credits__link credits__link_type_park"
        href="https://intuition.team/park"
      >
        <span class="credits__link-anchor">Intuition</span>
      </a>
    </div>
    <div class="header__cell header__cell_for_mnt section__mnt">
      <a
        class="credits__link credits__link-author"
        href="https://github.com/mishaberezin/mash"
      >
        <span class="credits__link-anchor" title="Misha Berezin">M</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="http://nellykam.space"
      >
        <span class="credits__link-anchor" title="Nelly Kam">N</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="https://www.behance.net/29ine"
      >
        <span class="credits__link-anchor" title="Anatolie Micaliuc">T</span>
      </a>
    </div>
  </header>
  <main class="section__main">
    <div class="section__main-cell section__main-cell_for_sample">
      <Zoom>
        <div>
          <Sample
            arrangement="{$layout}"
            headline="{$headline}"
            text="{$text}"
            logo="{$logo}"
            picture="{$picture}"
          ></Sample>
        </div>
      </Zoom>
    </div>
    <div class="section__main-cell section__main-cell_for_sharing">
      <!-- <svelte:component this="{Sharing}" /> -->
    </div>
  </main>
</section>
