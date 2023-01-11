import { el } from "./settings.js";

export const utils = {};

utils.setPlaceholder = (system) => {
    el.input.value = '';
    el.input.type = (system === 'hexadecimal') ? 'text' : 'number';
    const placeholder = (system != 'choose system') ?
    `convert from ${system} system` : 'choose numeral system';
    return placeholder;
};
utils.setTitle = (system) => {
    const title = (system != 'choose system') ? 
    `result in ${system} system: ` :'choose numeral system';
    return title;
};
utils.convertFromDec = (num, base) => {
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
  utils.convertToDec = (num, base) => {
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


