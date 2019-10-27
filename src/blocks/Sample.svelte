<script>
  import Textbox from '../blocks/Textbox.svelte';
  import Image from './Image.svelte';

  export let arrangement = {};
  export let highlight = false;
  export let headline = '';
  export let text = '';
  export let logo = '';
  export let picture = '';
  export let base64 = false;

  if (base64) {
    (async () => {
      logo = await fetch('https://picsum.photos/150/90')
        .then(resp => resp.arrayBuffer())
        .then(buffer => {
          var base64Flag = 'data:image/jpeg;base64,';
          var binary = '';
          var bytes = [].slice.call(new Uint8Array(buffer));
          bytes.forEach(b => (binary += String.fromCharCode(b)));
          const base64 = btoa(binary);

          return base64Flag + base64;
        });

      picture = await fetch('https://picsum.photos/400/200')
        .then(resp => resp.arrayBuffer())
        .then(buffer => {
          var base64Flag = 'data:image/jpeg;base64,';
          var binary = '';
          var bytes = [].slice.call(new Uint8Array(buffer));
          bytes.forEach(b => (binary += String.fromCharCode(b)));
          const base64 = btoa(binary);

          return base64Flag + base64;
        });
    })();
  }

  const style = [
    `--area-logo: ${arrangement.logo}`,
    `--area-text: ${arrangement.text}`,
    `--area-image: ${arrangement.image}`
  ].join(';');
</script>

<style>
  .sample {
    width: 1024px;
    height: 512px;
    box-sizing: border-box;
    display: grid;
    grid-template: repeat(2, 236px) / repeat(4, 241px);
    grid-gap: 12px;
    padding: 12px;
    background: #fff;
  }

  .sample__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .sample__item_role_logo {
    grid-area: var(--area-logo);
    z-index: 1;
  }

  .sample__item_role_text {
    grid-area: var(--area-text);
    z-index: 1;
  }

  .sample__item_role_image {
    grid-area: var(--area-image);
    z-index: 0;
  }

  .sample_highlight .sample__item_role_logo {
    background-color: rgba(86, 0, 255, 0.3);
  }
  .sample_highlight .sample__item_role_text {
    background-color: rgba(0, 128, 0, 0.5);
  }
  .sample_highlight .sample__item_role_image {
    background-color: rgba(255, 192, 203, 0.3);
  }
</style>

<div class="sample" class:sample_highlight="{highlight}" {style} on:click>
  <div class="sample__item sample__item_role_logo">
    <Image type="logo" url="{logo}"></Image>
  </div>
  <div class="sample__item sample__item_role_text">
    <Textbox {headline} {text}></Textbox>
  </div>
  <div class="sample__item sample__item_role_image">
    <Image type="picture" url="{picture}"></Image>
  </div>
</div>
