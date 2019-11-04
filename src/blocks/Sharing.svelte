<script>
  import html2canvas from 'html2canvas';
</script>

<style>
  @import '../fonts/navigo.css';

  .sharing {
    font-family: Navigo;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-around;
  }

  .sharing__item {
    font-size: 75px;
    font-weight: bold;
    line-height: 100px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;
  }

  .sharing__item:hover {
    transform: scale(1.05);
  }

  .sharing__item:active {
    transform: scale(1);
  }
</style>

<div class="sharing">
  <div class="sharing__item">fb</div>
  <div class="sharing__item">inst</div>
  <div class="sharing__item">tw</div>
  <div class="sharing__item">vk</div>
  <div class="sharing__item">file</div>
  <div class="sharing__item">url</div>
</div>
