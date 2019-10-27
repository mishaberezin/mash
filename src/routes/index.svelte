<script>
  import throttle from 'lodash/throttle';
  import { section } from '../store.js';
  import { onMount } from 'svelte';

  let isMobile = false;
  onMount(() => {
    const check = () =>
      screen.width <= 640 ||
      window.matchMedia('only screen and (max-width: 640px)').matches;

    isMobile = check();

    window.addEventListener(
      'resize',
      throttle(() => {
        isMobile = check();
      }, 100)
    );
  });

  import SetupSection from '../sections/SetupSection.svelte';
  import LayoutSection from '../sections/LayoutSection.svelte';
  import ResultSection from '../sections/ResultSection.svelte';
  import MobileSection from '../sections/MobileSection.svelte';

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
