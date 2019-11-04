<script>
  import * as sapper from '@sapper/app';
  import { onMount, createEventDispatcher } from 'svelte';
  import { storage } from '../vendor/firebase';
  import fileSaver from 'file-saver';
  import uuid from 'uuid/v1';
  import { urlToB64Async } from '../utils';

  import fragment from 'svelte-fragment';
  import Sample from '../blocks/Sample.svelte';
  import Zoom from '../blocks/Zoom.svelte';
  import Logo from '../blocks/Logo.svelte';
  import Image from '../blocks/Image.svelte';
  import Arrow from '../blocks/Arrow.svelte';

  import { layout, headline, text, logo, picture } from '../store.js';

  let html2canvas;
  let logoB64;
  let pictureB64;

  let Sharing;

  onMount(async () => {
    const module = await import('../blocks/Sharing.svelte');
    Sharing = module.default;

    logoB64 = await urlToB64Async($logo);
    pictureB64 = await urlToB64Async($picture);
  });

  const dispatch = createEventDispatcher();

  const { permutation } = $layout;

  let sample;
  const onDownloadClick = () => {
    window.scrollTo(0, 0); // https://git.io/Je28P

    html2canvas(sample, {
      scale: 1
    }).then(canvas => {
      canvas.toBlob(blob => {
        fileSaver.saveAs(blob, 'screenshot.png');
      });
    });
  };
  const onShareClick = async () => {
    const id = uuid();

    const data = {
      headline: $headline,
      text: $text,
      logo: logoB64,
      picture: pictureB64
    };

    window.scrollTo(0, 0);

    const canvas = await html2canvas(sample, {
      scale: 1
    });
    const result = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        const imgPath = `test/${id}.png`;
        const storageRef = storage.ref(imgPath);
        const task = storageRef.put(blob);

        task.on(
          'state_changed',
          snapshot => {
            console.log(snapshot);
          },
          reject,
          resolve
        );
      });
    });

    console.log(result);
    // sapper.goto(`/look-${id}`);

    // return new Promise((resolve, reject) => {
    //   const jsonPath = `test/${id}.json`;
    //   const storageRef = firebase.storage().ref(jsonPath);
    //   const blob = new Blob([JSON.stringify(data, null, 4)], {
    //     type: 'application/json'
    //   });
    //   const task = storageRef.put(blob);

    //   task.on(
    //     'state_changed',
    //     snapshot => {
    //       console.log(snapshot);
    //     },
    //     reject,
    //     resolve
    //   );
    // });
  };

  const onArrowClick = () => {
    dispatch('back');
  };

  const onHomeClick = () => {
    dispatch('home');
  };
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

  .section__header {
    width: 100%;
    color: #000;
    font-size: 34px;
    font-weight: bold;
    display: grid;
    grid-template: minmax(120px, 20vh) / repeat(5, 1fr);
    grid-template-areas: 'cell_1 cell_2 cell_3 cell_4 cell_5';
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
  <header class="section__header">
    <div class="section__header-cell section__header-cell_for_back-button">
      <Arrow on:click="{onArrowClick}"></Arrow>
    </div>
    <div
      class="section__header-cell section__header-cell_for_title section__title"
      on:click="{onHomeClick}"
    >
      Layout Mash
    </div>
    <div
      class="section__header-cell section__header-cell_for_intuition
      section__intuition"
    >
      <a
        class="credits__link credits__link_type_park"
        href="https://intuition.team/park"
      >
        <span class="credits__link-anchor">Intuition</span>
      </a>
    </div>
    <div class="section__header-cell section__header-cell_for_mnt section__mnt">
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
        <div bind:this="{sample}">
          <Sample
            arrangement="{permutation}"
            headline="{$headline}"
            text="{$text}"
            logo="{logoB64}"
            picture="{pictureB64}"
          ></Sample>
        </div>
      </Zoom>
    </div>
    <!-- <div
      class="section__main-cell section__main-cell_for_download"
      on:click={onDownloadClick}>
      Download
    </div> -->
    <div
      class="section__main-cell section__main-cell_for_sharing"
      on:click="{onShareClick}"
    >
      <Sharing></Sharing>
    </div>
  </main>
</section>
