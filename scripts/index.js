import { KEYBOARD_EN } from "./constants.js";
import { onKeyClick } from "./events.js";

let isBig = false;

export const setIsBig = () => {
  if (isBig !==false) {
    isBig = false;
  } else {
    isBig = true;
  }
}


function renderKey(lineHtml, lineValue) {
  const [textAreaRoot] = document.getElementsByTagName('textarea');

  if (!textAreaRoot) {
    console.error('[Error]: Text area not found.');

    return;
  }

  lineValue.forEach((key) => {
    const keyRoot = document.createElement('div');
    keyRoot.setAttribute('class', 'keyboard-key');
    keyRoot.setAttribute('id', key.code);
    keyRoot.innerText = key.key;

    // Set dynamic styles to each key
    keyRoot.style.backgroundColor = key.background;
    keyRoot.style.width = key.width;
    
    keyRoot.style.textTransform = isBig? 'uppercase' : 'none';

    keyRoot.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      onKeyClick(key, textAreaRoot, keyRoot);
    }


    lineHtml.appendChild(keyRoot);
  })
}

function renderKeyboardLine(keyboard) {
  KEYBOARD_EN.forEach((line) => {
    const lineRoot = document.createElement('div');
    lineRoot.setAttribute('class', 'keyboard-line');

    keyboard.appendChild(lineRoot);

    renderKey(lineRoot, line);
  })
}

export function renderKeyboard(root) {
  const keyboardRoot = document.createElement('div');
  keyboardRoot.setAttribute('class', 'keyboard-root');

  root.appendChild(keyboardRoot);

  renderKeyboardLine(keyboardRoot);
}

function renderTextArea(body, root) {
  const textAreaRoot = document.createElement('textarea');
  textAreaRoot.setAttribute('class', 'textarea-root');

  root.appendChild(textAreaRoot)

  body.onkeydown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onKeyClick({ code: e.code, key: e.key }, textAreaRoot)
  }
}


export function initApp() {
  const root = document.createElement('div');
  const a = root.setAttribute('id', 'root');
  const [body] = document.getElementsByTagName('body');

  if (body) {
    body.appendChild(root);

    renderTextArea(body, root);
    renderKeyboard(root);
  } else {
    console.error('[Error]: Body not found.');
  }
}

initApp();