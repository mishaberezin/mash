<script>
  export let flex;
  export let headline;
  export let paragraph;

  export let minimumFontSize;
  export let headlineFontSize;
  export let headlineLineHeight;
  export let paragraphFontSize;
  export let paragraphLineHeight;
  export let marginSize;

  let textbox;
  let textbox__headline;
  let textbox__paragraph;

  let textboxStyleFontSize;

  $: if (textbox) {
    // console.count('omg');

    textbox__headline.style.fontSize = `${headlineFontSize}em`;
    textbox__headline.style.lineHeight = `${headlineLineHeight}em`;
    textbox__paragraph.style.fontSize = `${paragraphFontSize}em`;
    textbox__paragraph.style.lineHeight = `${paragraphLineHeight}em`;
    textbox__paragraph.style.marginTop = `${marginSize}em`;

    const { clientHeight, clientWidth } = textbox;

    let fontSize = 20;
    while (textbox.scrollWidth === clientWidth) {
      const next = fontSize + 1;
      textbox.style.fontSize = next;
      if (textbox.scrollWidth < clientWidth) {
        fontSize++;
      } else {
        textbox.style.fontSize = fontSize;
        break;
      }
    }
    while (textbox.scrollHeight < clientHeight) {
      const next = fontSize + 1;
      textbox.style.fontSize = next;
      if (textbox.scrollHeight < clientHeight) {
        fontSize++;
      } else {
        textbox.style.fontSize = fontSize;
        break;
      }
    }
    while (textbox.scrollWidth > clientWidth && fontSize > minimumFontSize) {
      textbox.style.fontSize = --fontSize;
    }
    while (textbox.scrollHeight > clientHeight && fontSize > minimumFontSize) {
      textbox.style.fontSize = --fontSize;
    }

    //     function ellipsizeTextBox(id) {
    //     var el = document.getElementById(id);
    //     var wordArray = el.innerHTML.split(' ');
    //     while(el.scrollHeight > el.offsetHeight) {
    //         wordArray.pop();
    //         el.innerHTML = wordArray.join(' ') + '...';
    //      }
    // }
    // ellipsizeTextBox(‘block-with-text);

    textboxStyleFontSize = textbox.style.fontSize;
  }
</script>

<style>
  .textbox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */

    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }
  .textbox.flex {
    position: static;
    width: 100%;
    height: 100%;
  }

  .textbox__headline {
    font-size: 3em;
    line-height: 1.6em;
    font-weight: 800;
    margin: 0;
  }
  .textbox__paragraph {
    font-size: 1em;
    line-height: 1.2em;
    margin: 0;
  }

  .textbox__headline ~ .textbox__paragraph {
    margin-top: 1.2em;
  }

  .textbox__label {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    color: #666;
  }
</style>

<div class="textbox" class:flex bind:this="{textbox}">
  <h2 class="textbox__headline" bind:this="{textbox__headline}">
    {headline}
  </h2>
  <p class="textbox__paragraph" bind:this="{textbox__paragraph}">
    {paragraph}
  </p>
  <span class="textbox__label">{textboxStyleFontSize}</span>
</div>
