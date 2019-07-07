<script>
  import globalcss from './global.css';
  import normalize from 'normalize.css';
  import MegaButton from './components/MegaButton.svelte';
  import FileField from './components/FileField.svelte';
  import TextField from './components/TextField.svelte';
  import SvgText from './components/SvgText.svelte';

  let stage = 'initial';

  const onHeadlineChange = (e) => {
    console.log(e);
    console.log('HELLO CHANGE');
  }

  const onTextChange = (e) => {
    console.log(e);
    console.log('HELLO CHANGE');
  }

  const onLogoChange = (e) => {
    console.log(e);
    console.log('HELLO CHANGE');
  }

  const onPictureChange = (e) => {
    console.log(e);
    console.log('HELLO CHANGE');
  }
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
    /* border-bottom: 3px solid black; */
    box-sizing: border-box;
    position: relative;
  }

  .page__main-line:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 7px;
    background-color: #000;
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
      <div class="page__main-line"><TextField label="Headline" on:change={onHeadlineChange}/></div>
      <div class="page__main-line"><TextField label="Text" on:change={onTextChange}/></div>
      <div class="page__main-line"><FileField label="Logo" on:change={onLogoChange}/></div>
      <div class="page__main-line page__main-line_last">
        <FileField label="Picture" on:change={onPictureChange}/>
      </div>
    </div>
    <div class="page__side">
      <MegaButton>Generate</MegaButton>
    </div>
  {:else if stage === 'layout'}
    <MegaButton>Layout</MegaButton>
  {/if}
</div>
