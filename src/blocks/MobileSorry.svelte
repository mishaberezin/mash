<style>
  @import "../fonts/navigo.css";

  .section {
    height: 100%;
    width: 100%;
    display: flex;
    font-family: Navigo;
    border-top: 7px solid #000;
    box-sizing: border-box;
    flex-direction: column;
    background-image: url("../assets/mobile-sorry.svg");
    background-repeat: no-repeat;
    background-position: bottom left;
  }

  .section__header {
    height: 90px;
    box-sizing: border-box;
    border-bottom: 7px solid #000;
    font-weight: bold;
    font-size: 34px;
    padding-left: 16px;
    display: flex;
    align-items: center;
  }

  .section__main {
    flex-grow: 1;
    border-bottom: 7px solid #000;
    position: relative;
  }

  .section__main-text {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    font-size: 30px;
    line-height: 1.4em;
    padding-left: 20px;
    padding-bottom: 20px;
  }
</style>

<section class="section section_name_mobile">
  <header class="section__header">Layout Mash</header>
  <main class="section__main">
    <div class="section__main-text">
      Desktop
      <br />
      yourself
      <br />
      4 beta mashing
    </div>
  </main>
</section>
