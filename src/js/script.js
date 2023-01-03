const el = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    selectFrom: document.querySelector('#from'),
    selectTo: document.querySelector('#to'),
    resultTitle: document.querySelector('.resultTitle'),
    resultBox: document.querySelector('.result')
  };
  
  const allowedChars = {
    hex: /[0-9abcdef]/,
    dec: /[0-9]/,
    octal: /[0-7]/,
    qua: /[0-3]/,
    bi: /[01]/
  };
  
  const placeholderMaker = (system) => {
    const placeholder = (system != 'choose system') ?
    `convert from ${system} system` : 'choose numeral system';
    return placeholder;
  };
  
  const titleMaker = (system) => {
    const title = (system != 'choose system') ? 
    `result in ${system} system: ` :'choose numeral system';
    return title;
  };
  
  el.selectFrom.addEventListener('change', () => {
    const index = el.selectFrom.selectedIndex;
    el.input.placeholder = placeholderMaker(el.selectFrom.options[index].text);
    el.input.value = '';
    el.resultBox.innerHTML = '';
  });
  el.selectTo.addEventListener('change', () => {
    const index = el.selectTo.selectedIndex;
    el.resultTitle.innerHTML = titleMaker(el.selectTo.options[index].text);
    el.resultBox.innerHTML = '';
  });
  
  
  el.input.addEventListener("keypress", e => {
    const fromIndex = el.selectFrom.selectedIndex;
    const fromSystem = el.selectFrom.options[fromIndex].value;
    if(e.keyCode !== 13){
      if ( fromSystem === 'hex' && !allowedChars.hex.test(e.key)) {
        e.preventDefault();
      } else if(fromSystem === 'dec' && !allowedChars.dec.test(e.key)){
        e.preventDefault();
      } else if(fromSystem === 'octal' && !allowedChars.octal.test(e.key)){
        e.preventDefault();
      } else if(fromSystem === 'qua' && !allowedChars.qua.test(e.key)){
        e.preventDefault();
      } else if(fromSystem === 'bi' && !allowedChars.bi.test(e.key)){
        e.preventDefault();
      }
    } 
  });
  
  el.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fromIndex = el.selectFrom.selectedIndex;
    const toIndex = el.selectTo.selectedIndex;
    const fromSystem = el.selectFrom.options[fromIndex].value;
    const toSystem = el.selectTo.options[toIndex].value;
    const number = el.input.value;
    const notComplete = fromIndex === 0 || toIndex === 0 || !number;
    if(notComplete){
      alert('fill out the form');
    }else if(toSystem === 'hex'){
      switch (fromSystem) {
        case 'hex':
          el.resultBox.innerHTML = number;
          break;
        case 'dec':
          console.log('submitted');
          converter(number, 16);
          break;
        case 'octal':
          converter(convertToDec(number, 8), 16);
          break;
        case 'qua':
          converter(convertToDec(number, 4), 16);
          break;
        case 'bi':
          converter(convertToDec(number, 2), 16);
          break;
      }
    }else if(toSystem === 'dec') {
      switch (fromSystem) {
        case 'hex':
          el.resultBox.innerHTML = String(convertToDec(number, 16));
          break;
        case 'dec':
          el.resultBox.innerHTML = String(number);
          break;
        case 'octal':
          el.resultBox.innerHTML = String(convertToDec(number, 8));
          break;
        case 'qua':
          el.resultBox.innerHTML = String(convertToDec(number, 4));
          break;
        case 'bi':
          el.resultBox.innerHTML = String(convertToDec(number, 2));
          break;
      }
    } else if(toSystem === 'octal'){
      switch (fromSystem) {
        case 'hex':
          converter(convertToDec(number, 16), 8);
          break;
        case 'dec':
          converter(number, 8);
          break;
        case 'octal':
          el.resultBox.innerHTML = number;
          break;
        case 'qua':
          converter(convertToDec(number, 4), 8);
          break;
        case 'bi':
          converter(convertToDec(number, 2), 8);
          break;
      }
    } else if(toSystem === 'qua'){
      switch (fromSystem) {
        case 'hex':
          converter(convertToDec(number, 16), 4);
          break;
        case 'dec':
          converter(number, 4);
          break;
        case 'octal':
          converter(convertToDec(number, 8), 4);
          break;
        case 'qua':
          el.resultBox.innerHTML = number;
          break;
        case 'bi':
          converter(convertToDec(number, 2), 4);
          break;
      }
    } else if(toSystem === 'bi'){
      switch (fromSystem) {
        case 'hex':
          converter(convertToDec(number, 16), 2);
          break;
        case 'dec':
          converter(number, 2);
          break;
        case 'octal':
          converter(convertToDec(number, 8), 2);
          break;
        case 'qua':
          converter(convertToDec(number, 4), 2);
          break;
        case 'bi':
          el.resultBox.innerHTML = number;
          break;
      }
    }
    
  });
  
  const convertToDec = (num, base) => {
    const numArr = num.split('');
    if(base === 16){
      let hexArr = [];
      for(let hex of numArr){
        if(hex === 'a'){
          hexArr.push('10');
        } else if(hex === 'b'){
          hexArr.push('11');
        } else if(hex === 'c'){
          hexArr.push('12');
        } else if(hex === 'd'){
          hexArr.push('13');
        } else if(hex === 'e'){
          hexArr.push('14');
        } else if(hex === 'f'){
          hexArr.push('15');
        } else if(Number(hex)){
          hexArr.push(hex);
        } else if(hex === '0'){
          hexArr.push(hex);
        }
      }
      const revArr = hexArr.map(num => Number(num)).reverse();
      let decNum = 0;
      for (let i = 0; i < revArr.length; i++){
        decNum += revArr[i]*Math.pow(base, i);
      }
      return decNum;
    } else {
      const revArr = numArr.map(num => Number(num)).reverse();
      let decNum = 0;
      for (let i = 0; i < revArr.length; i++){
        decNum += revArr[i]*Math.pow(base, i);
      }
      return decNum;
    }
    
  };
  
  const converter = (num, base) => {
    let digits = [];
    for(let i = num; i !== 0; i = Math.floor(i/base)){
      digits.push(i%base);
    }
    if (base === 16){
      let hexDigits = [];
      for (let digit of digits) {
        if(digit === 15){
          hexDigits.push('f');
        } else if(digit === 14){
          hexDigits.push('e');
        } else if(digit === 13){
          hexDigits.push('d');
        } else if(digit === 12){
          hexDigits.push('c');
        } else if(digit === 11){
          hexDigits.push('b');
        } else if(digit === 10){
          hexDigits.push('a');
        } else if(digit === 0 &&
          digits.indexOf[digit] !== digits.length - 1){
          hexDigits.push(digit.toString());
        } else if(digit < 10 && digit > 0) {
          hexDigits.push(digit.toString());
        } 
      }
      const hexNum = hexDigits.reverse().join('');
      el.resultBox.innerHTML = hexNum;
    } else {
      el.resultBox.innerHTML = digits.reverse().join('');
    }
  };