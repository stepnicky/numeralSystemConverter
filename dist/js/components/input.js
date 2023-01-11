import { el, allowedChars } from "../settings.js";


class Input {
    constructor(){
        const thisInput = this;
        thisInput.preventUnwantedChars();
    }
    preventUnwantedChars(){
        const thisInput = this;
        thisInput.input = el.input;
        thisInput.input.addEventListener("keypress", e => {
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
    }
}

export default Input;