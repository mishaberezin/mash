<script>
  import globalcss from './global.css';
  import normalize from 'normalize.css';
  import MegaButton from './components/MegaButton.svelte';
  import FileField from './components/FileField.svelte';
  import TextField from './components/TextField.svelte';
  import SvgText from './components/SvgText.svelte';

  let stage = 'initial';

  // stage = 'layout';
</script>

<style>
  .page {
    height: 100%;
  }

  .page__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 16px solid #000;
    border-left: 0;
    background-color: #fff;
  }

  .page__main-line {
    flex-grow: 1;
    min-height: 130px;
    border-bottom: 3px solid black;
    box-sizing: border-box;
  }

  .page__main-line_last {
    border-bottom: none;
  }

  .page__side {
    position: fixed;
    height: 140vh;
    width: 140vh;
    min-height: 700px;
    min-width: 700px;
    right: -100vh;
    top: -20vh;
  }
</style>

<div class="page page_type_app">
  {#if stage === 'initial'}
    <div class="page__main">
      <div class="page__main-line">
        <SvgText main="Layout" misc="Mash"/>
      </div>
      <!-- <div class="page__main-line"><Field label="Headline"/></div> -->
      <div class="page__main-line"><TextField label="Headline"/></div>
      <div class="page__main-line"><TextField label="Text"/></div>
      <div class="page__main-line"><FileField label="Logo"/></div>
      <div class="page__main-line page__main-line_last">
        <FileField label="Photo"/>
      </div>
    </div>
    <div class="page__side">
      <MegaButton>Generate</MegaButton>
    </div>
  {:else if stage === 'layout'}
    <MegaButton>Layout</MegaButton>
  {/if}
</div>
