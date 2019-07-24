<script>
  import navigo from "../fonts/navigo.css";

  export let arrangement = {};
  export let allDone;
</script>

<style>
  .mega-button {
    width: 100%;
    height: 100%;
    font-family: Navigo;
    font-size: 50px;
    user-select: none;
    cursor: pointer;
    transition: transform 0.2s;

    transform: scale(1) perspective(1px) translateZ(0);
  }

  .mega-button:hover {
    /* transform: scale(1.05); */
  }

  .mega-button__circle {
    stroke: #000;
    stroke-width: 1px;
    transition: fill 0.2s;
  }

  .mega-button:hover .mega-button__circle {
    stroke: #000;
    stroke-width: 1px;
    fill: #fff;
  }

  .mega-button:active {
    transform: scale(1);
  }

  .mega-button__svg {
    height: 100%;
    transform: rotate(90deg);
    position: relative;
    right: -6%;
  }

  .mega-button__text {
    font-family: Navigo;
    font-weight: bold;
    font-size: 15px;
    fill: #fff;
    transition: fill 0.2s;
  }
  .mega-button:hover .mega-button__text {
    fill: #000;
  }
  @keyframes buzz-out {
    10% {
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      transform: translateX(1px) rotate(0);
    }
    100% {
      transform: translateX(-1px) rotate(0);
    }
  }
  .mega-button_alldone {
    animation-name: buzz-out;
    animation-duration: 0.75s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
</style>

<div class="mega-button" class:mega-button_alldone={allDone} on:click>
  <svg
    class="mega-button__svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <circle class="mega-button__circle" cx="50" cy="49" r="50" />
    <text
      class="mega-button__text"
      x="50%"
      y="65%"
      dominant-baseline="middle"
      text-anchor="middle">
      <slot />
    </text>
  </svg>
</div>
