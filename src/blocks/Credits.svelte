<script>
  import parkSvg from "../assets/park.svg";
  import betaSvg from "../assets/beta.svg";

  export let url = "https://picsum.photos/200/400";

  $: style = `background-image: url('${url}');`;
</script>

<style>
  @import "../fonts/navigo.css";

  .credits {
    font-family: Navigo;
    display: grid;
    width: 100%;
    height: 100%;
    grid-column-gap: 20px;
    grid-template-columns: repeat(5, calc(20% - 16px));
    grid-template-areas: "area1  area2 area3 area4 area4";
    padding-left: 11px;
    padding-right: 28px;
    box-sizing: border-box;
  }

  .credits__item {
    font-size: 28px;
    font-weight: bold;
    padding-top: 10px;
  }

  .credits__title {
    padding-left: 1px;
  }

  .credits__intuition {
    padding-top: 16px;
  }

  .credits__team {
    grid-area: area4;
    font-size: 30px;
  }

  .credits__link {
    display: inline-block;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }

  .credits__link-anchor {
    display: inline-block;
    transform: translateX(0);
    transition: transform 0.2s;
  }

  .credits__link:hover .credits__link-anchor {
    transform: translateX(14px);
  }

  .credits__park-svg {
    height: 40px;
  }
  .credits__beta-svg {
    height: 40px;
  }

  .credits__link-author {
    margin-bottom: 6px;
    display: inline-block;
    white-space: nowrap;
  }
</style>

<div class="credits">
  <div class="credits__item credits__title">Layout Mash</div>
  <div class="credits__item credits__beta">
    <img class="credits__beta-svg" src={betaSvg} alt="Beta" />
  </div>
  <div class="credits__item credits__intuition">
    <a
      class="credits__link credits__link_type_park"
      href="https://intuition.team/park">
      <img
        class="credits__link-anchor credits__park-svg"
        src={parkSvg}
        alt="Intuition Park" />
    </a>
  </div>
  <div class="credits__item credits__team">
    <a
      class="credits__link credits__link-author"
      href="https://github.com/mishaberezin/mash">
      <span class="credits__link-anchor">Misha Berezin</span>
    </a>
    <br />
    <a class="credits__link credits__link-author" href="http://nellykam.space">
      <span class="credits__link-anchor">Nelly Kam</span>
    </a>
    <br />
    <a
      class="credits__link credits__link-author"
      href="https://www.behance.net/29ine">
      <span class="credits__link-anchor">Anatolie Micaliuc</span>
    </a>
  </div>
</div>
