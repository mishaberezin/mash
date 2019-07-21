<script>
  import { textfit } from "../../lib/utils.js";
  import { onMount } from "svelte";
  import { innerWidth, innerHeight } from "../../lib/utils.js";

  export let min = 14;
  export let max = 300;

  let elem;
  let style = "font-size: 1em;";

  const update = () => {
    const { clientHeight, scrollHeight } = elem;
    let fontSize = parseInt(getComputedStyle(elem).fontSize, 10);

    if (elem.scrollHeight === clientHeight) {
      while (elem.scrollHeight === clientHeight) {
        elem.style.fontSize = fontSize + 1 + "px";
        if (elem.scrollHeight === clientHeight) {
          fontSize++;
        } else {
          elem.style.fontSize = fontSize + "px";
          break;
        }
      }
    } else {
      while (elem.scrollHeight > clientHeight) {
        fontSize--;
        elem.style.fontSize = fontSize + "px";
      }
    }
  };

  const onInput = ({ target }) => {
    dispatch("value", target.value);
  };

  onMount(() => {
    textfit(target, { min: 1, max: 300 });
  });
</script>

<style>
  .text-fit {
    width: 100%;
    height: 100%;
  }
</style>

<div class="text-fit" bind:this={elem} {style}>
  <slot />
</div>
