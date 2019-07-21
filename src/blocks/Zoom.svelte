<script>
  import { onMount } from "svelte";

  let ratio = 1;
  $: contentStyle = `transform: scale(${ratio});`;

  let wrapperStyle = "";

  let wrapper;
  let content;
  let slotContent;

  onMount(() => {
    const wrapperWidth = wrapper.clientWidth;
    const wrapperHeight = wrapper.clientHeight;

    ratio = wrapper.clientWidth / content.clientWidth;
    wrapperStyle = `height: ${wrapperHeight * ratio}px;`;
  });
</script>

<style>
  .zoom {
    overflow: hidden;
    width: 100%;
  }

  .zoom__content {
    display: inline-block;
    transform-origin: top left;
    /* transform-origin: top left; */
  }
</style>

<div class="zoom" bind:this={wrapper} style={wrapperStyle}>
  <div class="zoom__content" bind:this={content} style={contentStyle}>
    <slot />
  </div>
</div>
