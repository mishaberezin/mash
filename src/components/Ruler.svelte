<script></script>

<style>
  .ruler {
    display: inline-block;
    position: relative;
  }

  .ruler:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    background-image: repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 256px,
        rgba(0, 0, 0, 0.1) 256px,
        rgba(0, 0, 0, 0.1) 257px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0px,
        transparent 256px,
        rgba(0, 0, 0, 0.1) 256px,
        rgba(0, 0, 0, 0.1) 257px
      );
  }
</style>

<div class="ruler">
  <slot></slot>
</div>
