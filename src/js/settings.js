export const el = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    selectFrom: document.querySelector('#from'),
    selectTo: document.querySelector('#to'),
    resultTitle: document.querySelector('.resultTitle'),
    resultBox: document.querySelector('.result')
  };

export const allowedChars = {
    hex: /[0-9abcdef]/,
    dec: /[0-9]/,
    octal: /[0-7]/,
    qua: /[0-3]/,
    bi: /[01]/
  };
  