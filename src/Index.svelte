<script>
  import { screen } from "./stores/app.js";

  import SetupSection from "./blocks/SetupSection.svelte";
  import LayoutSection from "./blocks/LayoutSection.svelte";
  import ResultSection from "./blocks/ResultSection.svelte";

  const onSetupNext = () => {
    $screen = "layout";
  };

  const onLayoutNext = () => {
    $screen = "result";
  };
</script>

<style>
  .page {
    height: 100%;
  }
</style>

<div class="page page_name_index">
  {#if $screen === 'setup'}
    <SetupSection on:next={onSetupNext} />
  {:else if $screen === 'layout'}
    <LayoutSection on:next={onLayoutNext} />
  {:else if $screen === 'result'}
    <ResultSection />
  {/if}
</div>
