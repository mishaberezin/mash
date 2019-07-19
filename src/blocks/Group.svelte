<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import fragment from "svelte-fragment";

  import Sample from "./Sample.svelte";
  import TextBlock from "./TextBlock.svelte";
  import Logo from "./Logo.svelte";
  import Image from "./Image.svelte";
  import Zoom from "./Zoom.svelte";

  export let headline;
  export let text;
  export let logo;
  export let picture;
  export let permutations;

  const onSampleClick = permutation => {
    dispatch("sampleClick", permutation);
  };
</script>

<style>
  .group {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, calc(20% - 16px));
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 28px;
    grid-template-areas:
      "area0 area0 area0 area0 area0"
      "area1 area2 area3 area4 area5";
  }
</style>

<div class="group">
  {#each permutations as permutation, i}
    <div class="group__item" style="grid-area:area{i};">
      <Zoom>
        <Sample
          arrangement={permutation}
          on:click={() => onSampleClick(permutation)}>
          <template use:fragment slot="logo" let:data>
            <Logo url={logo} />
          </template>
          <template use:fragment slot="text" let:data>
            <TextBlock {headline} paragraph={text} />
          </template>
          <template use:fragment slot="image" let:data>
            <Image url={picture} />
          </template>
        </Sample>
      </Zoom>
    </div>
  {/each}
</div>
