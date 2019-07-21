<style>
  .arrow {
    width: 100%;
    cursor: pointer;
  }
  .arrow__svg {
    display: inline-block;
    position: relative;
    width: 139px;
    height: 72px;
    transition: transform 0.3s;
  }
  .arrow:hover .arrow__svg {
    transform: translateX(-10px);
  }
</style>

<div class="arrow" on:click>
  <svg
    class="arrow__svg"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMax meet">
    <path d="M4 32h135v7H4z" />
    <path d="M4.95 31l35.36 35.36-4.95 4.95L0 35.95z" />
    <path d="M40.3 4.95L4.96 40.3 0 35.35 35.36 0l4.95 4.95z" />
  </svg>
</div>
