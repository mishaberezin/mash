<script>
  import { createEventDispatcher } from "svelte";
  import { textfit } from "../../utils";

  export let id;

  let mix = "";
  export { mix as class };

  const dispatch = createEventDispatcher();

  const onInput = ({ target }) => {
    textfit(target, { min: 1, max: 300 });
    dispatch("value", target.value);
  };
</script>

<style>
  .textarea {
    height: 100%;
    width: 100%;
    background-color: transparent;
    position: relative;
    outline: none;
    border: 0;
    resize: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    /* margin-left: 20px; */
    color: #fff;
    width: 100%;
    line-height: 1.2em;
    font-size: 300px; /* Чтобы курсор был сразу большой */
    overflow: hidden; /* Убрать скролл */
  }
</style>

<textarea
  {id}
  class="textarea {mix}"
  spellcheck="false"
  on:focus
  on:blur
  on:input={onInput} />
