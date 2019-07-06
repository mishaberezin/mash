const getMaxFontSize = textbox => {
  const { clientHeight, clientWidth } = textbox;

  let originalFontSize = textbox.style.fontSize;
  let fontSize = originalFontSize;

  while (textbox.scrollWidth === clientWidth) {
    const next = fontSize + 1;
    textbox.style.fontSize = next;
    if (textbox.scrollWidth === clientWidth) {
      fontSize++;
    } else {
      textbox.style.fontSize = fontSize;
      break;
    }
  }
  while (textbox.scrollHeight === clientHeight) {
    const next = fontSize + 1;
    textbox.style.fontSize = next;
    if (textbox.scrollHeight < clientHeight) {
      fontSize++;
    } else {
      textbox.style.fontSize = fontSize;
      break;
    }
  }
};
