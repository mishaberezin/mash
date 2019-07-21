<script>
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
    padding: 0 28px;
    box-sizing: border-box;
  }

  .credits__item {
    font-size: 34px;
  }

  .credits__team {
    grid-area: area4;
    font-size: 30px;
  }

  .credits__link {
    text-decoration: none;
    transition: color 0.2s;
    color: rgba(0, 0, 0, 1);
  }

  .credits__link:hover {
    color: rgba(0, 0, 0, 0.6);
  }
</style>

<div class="credits">
  <div class="credits__item credits__title">Layout Mash</div>
  <div class="credits__item credits__beta">β</div>
  <div class="credits__item credits__intuition">
    <a class="credits__link" href="https://intuition.team/park">Intuition</a>
  </div>
  <div class="credits__item credits__team">
    <a class="credits__link" href="https://github.com/mishaberezin">
      Misha Berezin
    </a>
    <br />
    <a class="credits__link" href="https://www.behance.net/29ine">
      Anatolie Micaliuc
    </a>
    <br />
    <a class="credits__link" href="http://nellykam.space">Nelly Kam</a>
  </div>
</div>
