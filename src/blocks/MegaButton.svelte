<script>
  import navigo from "../fonts/navigo.css";

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
    cursor: pointer;
    transform: scale(0.95);
    transition: transform 0.2s;
  }

  .mega-button:hover {
    transform: scale(1);
  }

  .mega-button:active {
    transform: scale(0.95);
  }

  .mega-button__svg {
    height: 100%;
    transform: rotate(90deg);
  }

  .mega-button__text {
    font-family: Navigo;
    font-size: 10px;
    fill: #fff;
  }

  /* @-webkit-keyframes buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }
    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }

  @keyframes buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }
    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }
  .buzz-out {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
  }
  .mega-button:hover,
  .mega-button:focus,
  .mega-button:active {
    -webkit-animation-name: buzz-out;
    animation-name: buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  } */
</style>

<div class="mega-button buzz-out" on:click>
  <svg
    class="mega-button__svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" />
    <text
      x="50%"
      y="85%"
      dominant-baseline="middle"
      text-anchor="middle"
      class="mega-button__text">
      <slot />
    </text>
  </svg>
</div>
