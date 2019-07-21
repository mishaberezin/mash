<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import Sample from "./Sample.svelte";
  import Textbox from "./Textbox.svelte";
  import Logo from "./Logo.svelte";
  import Image from "./Image.svelte";
  import Zoom from "./Zoom.svelte";

  export let type = 1;
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
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 28px;
  }

  .group_type_1 {
    grid-template-columns: repeat(5, calc(20% - 16px));
    grid-template-areas:
      "area0  area0 area0 area0 area0"
      "area1  area2 area3 area4 area5"
      "area6  area7 area8 area9 area10"
      "area11 .     .     .     .";
  }

  .group_type_2 {
    grid-template-columns: repeat(4, calc(25% - 15px));
    grid-template-areas:
      "area0  area0  area0  area0"
      "area1  area2  area3  area4"
      "area5  area6  area7  area8"
      "area9  area10 area11 .";
  }

  .group_type_3 {
    grid-template-columns: repeat(3, calc(100% / 3 - 13px));
    grid-template-areas:
      "area0  area0  area0"
      "area1  area2  area3"
      "area4  area5  area6"
      "area7  area8  area9"
      "area10 area11 .";
  }

  .group_type_4 {
    grid-template-columns: repeat(5, calc(20% - 16px));
    grid-template-areas:
      "area0  area0 area1 area2  area3"
      "area0  area0 area4 area5  area6"
      "area7  area8 area9 area10 area11";
  }

  .group_type_5 {
    grid-template-columns: repeat(2, calc(50% - 10px));
    grid-template-areas:
      "area0  area0"
      "area1  area2"
      "area3  area4"
      "area5  area6"
      "area7  area8"
      "area9  area10"
      "area11 .";
  }
</style>

<div class="group group_type_{type}">
  {#each permutations as permutation, i}
    <div class="group__item" style="grid-area:area{i};">
      <Zoom>
        <Sample
          arrangement={permutation}
          on:click={() => onSampleClick(permutation)}
          {headline}
          {text}
          {logo}
          {picture} />
      </Zoom>
    </div>
  {/each}
</div>
