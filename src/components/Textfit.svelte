<script>
  import { onMount } from 'svelte';
  import { innerWidth, innerHeight } from '../../lib/utils.js';

  export let min = 14;
  export let max = 300;

  let elem;
  let style = 'font-size: 1em;';

  const update = () => {
    const { clientHeight, scrollHeight } = elem;
    let fontSize = parseInt(getComputedStyle(elem).fontSize, 10);

    if (elem.scrollHeight === clientHeight) {
      while (elem.scrollHeight === clientHeight) {
        elem.style.fontSize = fontSize + 1 + 'px';
        if (elem.scrollHeight === clientHeight) {
          fontSize++;
        } else {
          elem.style.fontSize = fontSize + 'px';
          break;
        }
      }
    } else {
      while (elem.scrollHeight > clientHeight) {
        fontSize--;
        elem.style.fontSize = fontSize + 'px';
      }
    }
  };

  onMount(() => {
    // throttle
    window.addEventListener('resize', update);
    update();
  });
</script>

<style>
  .textfit {
    width: 100%;
    height: 100%;
  }
</style>

<div class="textfit" bind:this="{elem}" {style}><slot></slot></div>
