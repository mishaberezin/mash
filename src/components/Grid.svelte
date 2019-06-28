<script>
  export let grid;

  {
  }
</script>

<style>
  :root {
    user-select: none;

    --area-full: 1/1/-1/-1;
  }

  .viewer {
    margin: 20px auto 0 auto;
    width: 1220px;
  }

  .viewer__cell {
    width: 600px;
    height: 400px;
    overflow: hidden;
    border: 1px solid #ccc;
    display: inline-block;
    position: relative;
  }

  .grid {
    box-sizing: border-box;
    width: 1024px;
    height: 512px;
    margin: 50px auto 0 50px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);
    grid-gap: 15px;
    padding: 15px;

    transform: scale(0.5);
    transform-origin: top left;

    position: absolute;
    top: 0;
    left: 0;
  }

  .grid_type_model {
    background-image: repeating-linear-gradient(
        90deg,
        transparent 1px,
        transparent 255px,
        rgba(0, 0, 0, 0.1) 255px,
        rgba(0, 0, 0, 0.1) 257px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 1px,
        transparent 255px,
        rgba(0, 0, 0, 0.1) 255px,
        rgba(0, 0, 0, 0.1) 257px
      );
  }

  .grid__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .grid__item_role_logo {
    grid-area: var(--area-logo);
  }

  .grid__item_role_text {
    grid-area: var(--area-text);
  }

  .grid__item_role_image {
    grid-area: var(--area-image);
    /* background-image: url('./image.png'); */
    /* z-index: -1; */
    grid-area: var(--area-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .grid_type_model .grid__item_role_logo {
    background-color: rgba(86, 0, 255, 0.3);
  }
  .grid_type_model .grid__item_role_text {
    background-color: rgba(0, 128, 0, 0.5);
  }
  .grid_type_model .grid__item_role_image {
    background-color: rgba(255, 192, 203, 0.3);
  }
</style>

<div class="sample">
  <div class="grid grid_type_demo">
    <div class="grid__item grid__item_role_logo">
      <div class="logo"></div>
    </div>
    <div class="grid__item grid__item_role_text">
      <div class="text">
        <h2 class="text__title">Choose your destiny</h2>
        <p class="text__paragraph">
          Mortal Kombat is back and better than ever in the next evolution of
          the iconic franchise.
        </p>
      </div>
    </div>
    <div class="grid__item grid__item_role_image">
      <div class="image"></div>
    </div>
  </div>
</div>
