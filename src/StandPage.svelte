<script>
  import fragment from 'svelte-fragment';

  import Panel from './components/Panel.svelte';
  import Sample from './components/Sample.svelte';
  import Ruler from './components/Ruler.svelte';
  import TextBlock from './components/TextBlock.svelte';
  import Logo from './components/Logo.svelte';
  import Image from './components/Image.svelte';

  import mcLogoUrl from './assets/mc-logo.svg';
  import cyborgImageUrl from './assets/cyborg.png';

  //   const results = [
  //     { logo: [1, 1, 5, 5], text: [3, 5, 5, 9] },
  //     { logo: [1, 1, 5, 5], text: [1, 5, 3, 9] },
  //     { logo: [1, 5, -1, 9], text: [1, 1, 5, 3] },
  //     { logo: [3, 5, -1, -1], text: [1, 1, 3, 9] },

  //     { logo: [1, 1, 3, 3], text: [1, 5, 5, 9] },
  //     { logo: [2, 2, 4, 4], text: [1, 5, 5, 7] },
  //     { logo: [3, 7, 5, 9], text: [1, 1, 5, 4] }
  //     // { logo: [3, 5, -1, -1], text: [1, 1, 3, 9] }
  //   ];

  const getRandom = items => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const shuffle = array => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const neverend = function*(arr) {
    for (let i = 0; true; i = (i + 1) % arr.length) {
      yield arr[i];
    }
  };

  const layouts = neverend([
    {
      areas: [[1, 1, 2, 3], [2, 1, 3, 2], [1, 3, 3, 5]]
    },
    {
      areas: [[1, 1, 2, 2], [2, 1, 3, 3], [1, 3, 3, 5]]
    },
    {
      areas: [[1, 1, 3, 3], [1, 3, 2, 4], [2, 3, 3, 5]]
    },
    {
      areas: [[1, 1, 2, 2], [2, 1, 3, 2], [1, 2, 3, 5]]
    }
  ]);

  const arrange = () => {
    const areas = shuffle(layouts.next().value.areas);
    const items = ['logo', 'text', 'image'];

    items.forEach(item => {
      document.documentElement.style.setProperty(
        `--area-${item}`,
        areas.pop().join('/')
      );
    });
  };
  arrange();
  document.body.addEventListener('click', arrange);
  document.body.addEventListener('keypress', ({ keyCode }) => {
    // spacebar
    if (keyCode === 32) {
      arrange();
    }
  });
</script>

<style>
  :root {
    user-select: none;

    --area-full: 1/1/-1/-1;
  }

  .viewer {
    margin: 20px auto 0 auto;
    width: 1220px;
  }

  .viewer__cell {
    width: 600px;
    height: 400px;
    overflow: hidden;
    border: 1px solid #ccc;
    display: inline-block;
    position: relative;
  }

  .grid {
    box-sizing: border-box;
    width: 1024px;
    height: 512px;
    margin: 50px auto 0 50px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);
    grid-gap: 15px;
    padding: 15px;

    transform: scale(0.5);
    transform-origin: top left;

    position: absolute;
    top: 0;
    left: 0;
  }

  .grid__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .grid__item_role_logo {
    grid-area: var(--area-logo);
  }

  .grid__item_role_text {
    grid-area: var(--area-text);
  }

  .grid__item_role_image {
    grid-area: var(--area-image);
    /* background-image: url('./image.png'); */
    /* z-index: -1; */
    grid-area: var(--area-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .grid_type_model .grid__item_role_logo {
    background-color: rgba(86, 0, 255, 0.3);
  }
  .grid_type_model .grid__item_role_text {
    background-color: rgba(0, 128, 0, 0.5);
  }
  .grid_type_model .grid__item_role_image {
    background-color: rgba(255, 192, 203, 0.3);
  }

  .text {
    font-family: 'Open Sans', sans-serif;
  }
  .text__title {
    font-size: 62px;
    font-weight: 800;
    margin: 0;
  }
  .text__paragraph {
    font-size: 22px;
  }
</style>

<Panel name="привет"></Panel>

<Ruler>
  <Sample>
    <template use:fragment slot="logo" let:data>
      <Logo url="{mcLogoUrl}">🏝</Logo>
    </template>
    <template use:fragment slot="text" let:data>
      <TextBlock
        title="See you later, Alligator"
        paragraph="Not so soon, baboon!"
      >
      </TextBlock>
    </template>
    <template use:fragment slot="image" let:data>
      <Image url="{cyborgImageUrl}">🏝</Image>
    </template>
  </Sample>
</Ruler>
