<script>
  export let arrangement = {};
  export let model;

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
  }

  .sample__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .sample__item_role_logo {
    grid-area: var(--area-logo);
  }

  .sample__item_role_text {
    grid-area: var(--area-text);
  }

  .sample__item_role_image {
    grid-area: var(--area-image);
  }

  .sample_model_true .sample__item_role_logo {
    background-color: rgba(86, 0, 255, 0.3);
  }
  .sample_model_true .sample__item_role_text {
    background-color: rgba(0, 128, 0, 0.5);
  }
  .sample_model_true .sample__item_role_image {
    background-color: rgba(255, 192, 203, 0.3);
  }
</style>

<div class="sample sample_model_{Boolean(model)}" {style} on:click>
  <div class="sample__item sample__item_role_logo">
    <slot name="logo">
      <span class="missing">logo</span>
    </slot>
  </div>
  <div class="sample__item sample__item_role_text">
    <slot name="text">
      <span class="missing">text</span>
    </slot>
  </div>
  <div class="sample__item sample__item_role_image">
    <slot name="image">
      <span class="missing">image</span>
    </slot>
  </div>
</div>
