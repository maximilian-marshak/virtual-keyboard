export function onKeyClick({ key, code }, textAreaHtml, keyHtml = undefined) {
    if (!keyHtml) {
      keyHtml = document.getElementById(key);
    }
  
    switch (code) {
      case 'Tab':
        textAreaHtml.value += '    ';
        break;
      case 'Enter':
        textAreaHtml.value += '\n';
        break;
      case 'Space':
        textAreaHtml.value += ' ';
        break;
      default:
        textAreaHtml.value += key;
        break;
    }
  
    keyHtml?.classList?.add('keyboard-key-active');
  
    setTimeout(() => {
      keyHtml?.classList?.remove('keyboard-key-active');
    }, 200);
  }


