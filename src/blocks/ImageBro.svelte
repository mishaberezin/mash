<script context="module">
  import { uidMakerFactory } from '../utils';

  const getUniqueCN = uidMakerFactory('image_');
  const globalIndex = new Map();
  const globalStyle = document.createElement('style');

  document.head.appendChild(globalStyle);

  const getClassName = base64 => {
    if (!globalIndex.has(base64)) {
      const className = getUniqueCN();

      globalStyle.sheet.insertRule(
        `.${className} {background-image: url('${base64}');}`,
      );

      globalIndex.set(base64, className);
    }

    return globalIndex.get(base64);
  };
</script>

<script>
  export let type = 'logo';
  export let url = '';

  // console.count(url);
  // console.log(getClassName(url));

  $: style = `background-image: url('${url}');`;
</script>

<style>
  .image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
  }

  .image_type_logo {
    background-size: contain;
    background-position: top left;
  }

  .image_type_picture {
    background-size: cover;
    background-position: bottom;
  }
</style>

<div class="image image_type_{type}" {style}></div>
