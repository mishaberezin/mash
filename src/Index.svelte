<script>
  import { screen, mobile } from "./store.js";

  import SetupSection from "./blocks/SetupSection.svelte";
  import LayoutSection from "./blocks/LayoutSection.svelte";
  import ResultSection from "./blocks/ResultSection.svelte";
  import MobileSorry from "./blocks/MobileSorry.svelte";

  const onSetupNext = () => ($screen = "layout");
  const onLayoutNext = () => ($screen = "result");
  const onLayoutBack = () => ($screen = "setup");
  const onResultBack = () => ($screen = "layout");
  const onHome = () => ($screen = "setup");
</script>

<style>
  .page {
    height: 100%;
  }
</style>

<div class="page page_name_index">
  {#if $mobile}
    <MobileSorry on:next={onSetupNext} />
  {:else if $screen === 'setup'}
    <SetupSection on:next={onSetupNext} />
  {:else if $screen === 'layout'}
    <LayoutSection
      on:next={onLayoutNext}
      on:back={onLayoutBack}
      on:home={onHome} />
  {:else if $screen === 'result'}
    <ResultSection on:back={onResultBack} on:home={onHome} />
  {/if}
</div>
