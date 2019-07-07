<script>
  import { headline, text, logo, picture } from '../stores/assets.js';
  import { layout } from '../stores/layout';

  import fragment from 'svelte-fragment';

  import Sample from '../components/Sample.svelte';
  import TextBlock from '../components/TextBlock.svelte';
  import Logo from '../components/Logo.svelte';
  import Image from '../components/Image.svelte';

  export let mix = '';

  const mcLogoUrl = $logo;
  const cyborgImageUrl = $picture;
  const permutation = $layout.permutation;

  console.log('$layout');
  console.log($layout);

  const onSampleClick = permutation => {
    console.log('permutation: ' + permutation);
    layout.permutation = permutation;
    dispatch('next');
  };
</script>

<style>
  .section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap {
    display: inline-block;
    border: 3px solid rgba(0, 0, 0, 0.2);
  }
</style>

<section class="section section_name_result">
  <div class="wrap">
    <Sample
      arrangement="{permutation}"
      on:click="{() => onSampleClick(permutation)}"
    >
      <template use:fragment slot="logo" let:data>
        <Logo url="{mcLogoUrl}">🏝</Logo>
      </template>
      <template use:fragment slot="text" let:data>
        <TextBlock headline="{$headline}" paragraph="{$text}"> </TextBlock>
      </template>
      <template use:fragment slot="image" let:data>
        <Image url="{cyborgImageUrl}">🏝</Image>
      </template>
    </Sample>
  </div>
</section>
