<script>
  import navigo from '../fonts/navigo.css';

  export let arrangement = {};
  export let model;
</script>

<style>
  .mega-button {
    width: 100%;
    height: 100%;
    font-family: Navigo;
    font-size: 50px;
    user-select: none;
  }

  .mega-button__svg {
    height: 100%;
  }
</style>

<div class="mega-button">
  <svg
    class="mega-button__svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      .rrrrr {
        font-family: Navigo;
        font-size: 10px;
        fill: #fff;
      }
    </style>
    <circle cx="50" cy="50" r="50"></circle>
    <g fill="grey" transform="rotate(90, 50, 50)">
      <text
        x="50%"
        y="80%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="rrrrr"
      >
        <slot></slot>
      </text>
    </g>
  </svg>
</div>
