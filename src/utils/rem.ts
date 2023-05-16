function setHtmlFontSize() {
  let w = document.documentElement.offsetWidth;
  if (w > 750) {
    w = 750;
  } else if (w < 375) {
    w = 375;
  }
  const sw = 750;
  const sf = 100;
  const htmlFontSize = (w / sw) * sf;
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    htmlElement.style.fontSize = `${htmlFontSize}px`;
  }
}

setHtmlFontSize();

window.addEventListener('resize', setHtmlFontSize);
