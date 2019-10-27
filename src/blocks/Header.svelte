<script>
    import Arrow from "../blocks/Arrow.svelte";

    export let presetName;

    const presets = {

    }


</script>

<header class="section__header">
    <div class="section__header-cell section__header-cell_for_back-button">
      <Arrow on:click={onArrowClick} />
    </div>
    <div
      class="section__header-cell section__header-cell_for_title section__title"
      on:click={onHomeClick}>
      Layout Mash
    </div>
    <div
      class="section__header-cell section__header-cell_for_intuition
      section__intuition">
      <a
        class="credits__link credits__link_type_park"
        href="https://intuition.team/park">
        <span class="credits__link-anchor">Intuition</span>
      </a>
    </div>
    <div class="section__header-cell section__header-cell_for_mnt section__mnt">
      <a
        class="credits__link credits__link-author"
        href="https://github.com/mishaberezin/mash">
        <span class="credits__link-anchor" title="Misha Berezin">M</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="http://nellykam.space">
        <span class="credits__link-anchor" title="Nelly Kam">N</span>
      </a>
      <a
        class="credits__link credits__link-author"
        href="https://www.behance.net/29ine">
        <span class="credits__link-anchor" title="Anatolie Micaliuc">T</span>
      </a>
    </div>
  </header>
