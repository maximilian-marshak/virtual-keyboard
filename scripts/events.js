export function onKeyClick({ key, code }, textAreaHtml, keyHtml = undefined) {

    if (!keyHtml) {
      keyHtml = document.getElementById(key);
    }

    function setCaretPosition(textAreaHtml, caretPos) {  
      if(textAreaHtml != null) {
          if(textAreaHtml.createTextRange) {
              const range = textAreaHtml.createTextRange();
              range.move('character', caretPos);
              range.select();
          }
          else {
              if(textAreaHtml.selectionStart) {
                textAreaHtml.focus();
                textAreaHtml.setSelectionRange(caretPos, caretPos);
              }
              else {
              textAreaHtml.focus();
              }
          }
      }
  }

    const deleteValueBeforeCaret = () => {
      const caretPosition = textAreaHtml.selectionStart;
      if(caretPosition === 0) return;
      textAreaHtml.value = textAreaHtml.value.slice(0, caretPosition-1) + textAreaHtml.value.slice(caretPosition);
      setCaretPosition(textAreaHtml, caretPosition-1);
    }

    const deleteValueAfterCaret = () => {
      const caretPosition = textAreaHtml.selectionStart;
      textAreaHtml.value = textAreaHtml.value.slice(0, caretPosition) + textAreaHtml.value.slice(caretPosition+1);
      setCaretPosition(textAreaHtml, caretPosition);
    }

    const moveCaretLeft = () => {
      const caretPosition = textAreaHtml.selectionStart;
      if(caretPosition === 0) return;
      setCaretPosition(textAreaHtml,caretPosition-1);
    }

    const moveCaretRight = () => {
      const caretPosition = textAreaHtml.selectionStart;
      setCaretPosition(textAreaHtml,caretPosition+1);
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
      case 'ArrowLeft':
        moveCaretLeft();
        break;
      case 'ArrowRight':
        moveCaretRight();
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


