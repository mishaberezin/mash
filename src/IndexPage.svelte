<script>
  import { screen } from './stores/app.js';

  import globalcss from './global.css';
  import normalize from 'normalize.css';

  import SetupSection from './sections/SetupSection.svelte';
  import LayoutSection from './sections/LayoutSection.svelte';
  import ResultSection from './sections/ResultSection.svelte';

  const onSetupNext = () => {
    $screen = 'layout';
  };

  const onLayoutNext = () => {
    $screen = 'result';
  };
</script>

<style>
  .page {
    height: 100%;
  }
</style>

<div class="page page_name_index">
  {#if $screen === 'setup'}
  <SetupSection mix="page__section" on:next="{onSetupNext}"></SetupSection>
  {:else if $screen === 'layout'}
  <LayoutSection on:next="{onLayoutNext}"></LayoutSection>
  {:else if $screen === 'result'}
  <ResultSection></ResultSection>
  {/if}
</div>
