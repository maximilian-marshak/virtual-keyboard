/*
  background: 'black', 'gray'
  width: '50px', '60px', '125px', '75px', '300px'
 */

  const FIRST_EN_LINE = [
    {
      background: 'black',
      width: '50px',
      key: '`',
      code: 'Backquote',
      isUpperCase: false,
    },
    {
      background: 'black',
      width: '50px',
      key: '1',
      code: 'Digit1',
      isUpperCase: false,
    },
  ]
  const SECOND_EN_LINE = [
    {
      background: 'black',
      width: '60px',
      key: 'Tab',
      code: 'Tab',
      isUpperCase: false,
    },
    {
      background: 'gray',
      width: '50px',
      key: 'q',
      code: 'KeyQ',
      isUpperCase: true,
    },
  ]
  
  export const KEYBOARD_EN = [
    FIRST_EN_LINE,
    SECOND_EN_LINE,
  ]