export function onKeyClick({ key, code }, textAreaHtml, keyHtml = undefined) {

    if (!keyHtml) {
      keyHtml = document.getElementById(key);
    }

    const deleteValueBeforeCaret = () => {
      const caretPosition = textAreaHtml.selectionStart;
      textAreaHtml.value = textAreaHtml.value.slice(0, caretPosition-1) + textAreaHtml.value.slice(caretPosition);
    }

    const deleteValueAfterCaret = () => {
      const caretPosition = textAreaHtml.selectionStart;
      textAreaHtml.value = textAreaHtml.value.slice(0, caretPosition) + textAreaHtml.value.slice(caretPosition+1);
      console.log (textAreaHtml.value);
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
      case 'Backspace':
        deleteValueBeforeCaret();
        break;
      case 'Delete':
        deleteValueAfterCaret();
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


