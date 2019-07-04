<script>
  import fragment from 'svelte-fragment';
  import layouts from '../lib/layouts.js';
  import { getPermutations } from '../lib/utils.js';

  import Panel from './components/Panel.svelte';
  import Sample from './components/Sample.svelte';
  import Ruler from './components/Ruler.svelte';
  import TextBlock from './components/TextBlock.svelte';
  import Logo from './components/Logo.svelte';
  import Image from './components/Image.svelte';
  import Unzoom from './components/Unzoom.svelte';

  import mcLogoUrl from './assets/mc-logo.svg';
  import cyborgImageUrl from './assets/cyborg.png';

  // const arrange = () => {
  //   const areas = shuffle(layouts.next().value);
  //   const items = ['logo', 'text', 'image'];

  //   items.forEach(item => {
  //     document.documentElement.style.setProperty(
  //       `--area-${item}`,
  //       areas.pop().join('/')
  //     );
  //   });
  // };

  const allPlacements = areas => {};

  const arrange = areas => {
    const keys = ['logo', 'text', 'image'];
    const permutations = getPermutations(areas);

    return permutations.map(([logo, text, image]) => ({
      logo: logo.join('/'),
      text: text.join('/'),
      image: image.join('/')
    }));
  };

  const arrangements = layouts.map((areas, i) => {
    return {
      name: `Layout #${i}`,
      permutations: arrange(areas)
    };
  });
</script>

<style>
  .stand {
  }

  .stand__viewer {
    display: grid;
    grid-template: 270px / repeat(2, 550px);
    grid-auto-columns: 1fr;
    grid-auto-rows: 300px;
    margin: 0 auto;
    width: 1100px;
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
</style>

<div class="stand">
  <div class="stand__cpanel">
    <Panel name="привет"></Panel>
  </div>
  <div class="stand__viewer">
    {#each arrangements as arrangement}
    <Unzoom>
      <Ruler>
        <Sample model="{true}" arrangement="{arrangement.permutations[0]}">
          <span slot="logo"></span>
          <span slot="text"></span>
          <span slot="image"></span>
        </Sample>
      </Ruler>
    </Unzoom>

    {#each arrangement.permutations as permutation}
    <Unzoom>
      <Ruler>
        <Sample arrangement="{permutation}">
          <template use:fragment slot="logo" let:data>
            <Logo url="{mcLogoUrl}">🏝</Logo>
          </template>
          <template use:fragment slot="text" let:data>
            <TextBlock
              header="See you later, Alligator"
              paragraph="Not so soon, baboon!"
            >
            </TextBlock>
          </template>
          <template use:fragment slot="image" let:data>
            <Image url="{cyborgImageUrl}">🏝</Image>
          </template>
        </Sample>
      </Ruler>
    </Unzoom>
    {/each}
    <div>🛸</div>
    {/each}
  </div>
</div>
