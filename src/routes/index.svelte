<script>
  import { section } from '../store.js';
  import { onMount } from 'svelte';
  import SetupSection from '../pages/SetupSection.svelte';
  import LayoutSection from '../pages/LayoutSection.svelte';
  import ResultSection from '../pages/ResultSection.svelte';
  import MobileSection from '../pages/MobileSection.svelte';

  let isMobile = false;
  onMount(() => {
    const mql = matchMedia('only screen and (max-width: 640px)');

    isMobile = mql.matches;

    const handler = ({ matches }) => (isMobile = matches);
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  });

  const gotoSetupSection = () => ($section = 'setup');
  const gotoLayoutSection = () => ($section = 'layout');
  const gotoResultSection = () => ($section = 'result');
</script>

<style>
  .page {
    height: 100%;
  }
</style>

<div class="page">
  {#if isMobile}
  <MobileSection on:next="{gotoLayoutSection}"></MobileSection>
  {:else if $section === 'setup'}
  <SetupSection on:next="{gotoLayoutSection}"></SetupSection>
  {:else if $section === 'layout'}
  <LayoutSection
    on:next="{gotoResultSection}"
    on:back="{gotoSetupSection}"
    on:home="{gotoSetupSection}"
  ></LayoutSection>
  {:else if $section === 'result'}
  <ResultSection
    on:back="{gotoLayoutSection}"
    on:home="{gotoSetupSection}"
  ></ResultSection>
  {/if}
</div>
