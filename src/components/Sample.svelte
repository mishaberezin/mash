<style>
  .sample {
    width: 1024px;
    height: 512px;
    box-sizing: border-box;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);
    grid-gap: 15px;
    padding: 15px;
    background-color: #fff;
    --area-full: 1/1/-1/-1;
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
</style>

<div class="sample">
  <div class="sample__item sample__item_role_logo">
    <slot name="logo">
      <span class="missing">🐞 I'm not a logo</span>
    </slot>
  </div>
  <div class="sample__item sample__item_role_text">
    <slot name="text">
      <span class="missing">🐞 I'm not a text</span>
    </slot>
  </div>
  <div class="sample__item sample__item_role_image">
    <slot name="image">
      <span class="missing">🐞 I'm not an image</span>
    </slot>
  </div>
</div>
