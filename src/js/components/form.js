import { utils } from "../utils.js";
import { el } from "../settings.js";
import Input from "./input.js";
import Select from "./select.js";

class Form {
    constructor(){
        const thisForm = this;
        thisForm.initSelect();
        thisForm.initInput();
        thisForm.initForm();
    }
    initSelect(){
        const thisForm = this;
        thisForm.select = new Select;
    }
    initInput(){
        const thisForm = this;
        thisForm.input = new Input;
    }
    initForm(){
        const thisForm = this;

        thisForm.form = el.form;

        thisForm.form.addEventListener('submit', (e) => {
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
                  utils.convertFromDec(number, 16);
                  break;
                case 'octal':
                  utils.convertFromDec(utils.convertToDec(number, 8), 16);
                  break;
                case 'qua':
                  utils.convertFromDec(utils.convertToDec(number, 4), 16);
                  break;
                case 'bi':
                  utils.convertFromDec(utils.convertToDec(number, 2), 16);
                  break;
              }
            }else if(toSystem === 'dec') {
              switch (fromSystem) {
                case 'hex':
                  el.resultBox.innerHTML = String(utils.convertToDec(number, 16));
                  break;
                case 'dec':
                  el.resultBox.innerHTML = String(number);
                  break;
                case 'octal':
                  el.resultBox.innerHTML = String(utils.convertToDec(number, 8));
                  break;
                case 'qua':
                  el.resultBox.innerHTML = String(utils.convertToDec(number, 4));
                  break;
                case 'bi':
                  el.resultBox.innerHTML = String(utils.convertToDec(number, 2));
                  break;
              }
            } else if(toSystem === 'octal'){
              switch (fromSystem) {
                case 'hex':
                  utils.convertFromDec(utils.convertToDec(number, 16), 8);
                  break;
                case 'dec':
                  utils.convertFromDec(number, 8);
                  break;
                case 'octal':
                  el.resultBox.innerHTML = number;
                  break;
                case 'qua':
                  utils.convertFromDec(utils.convertToDec(number, 4), 8);
                  break;
                case 'bi':
                  utils.convertFromDec(utils.convertToDec(number, 2), 8);
                  break;
              }
            } else if(toSystem === 'qua'){
              switch (fromSystem) {
                case 'hex':
                  utils.convertFromDec(utils.convertToDec(number, 16), 4);
                  break;
                case 'dec':
                  utils.convertFromDec(number, 4);
                  break;
                case 'octal':
                  utils.convertFromDec(utils.convertToDec(number, 8), 4);
                  break;
                case 'qua':
                  el.resultBox.innerHTML = number;
                  break;
                case 'bi':
                  utils.convertFromDec(utils.convertToDec(number, 2), 4);
                  break;
              }
            } else if(toSystem === 'bi'){
              switch (fromSystem) {
                case 'hex':
                  utils.convertFromDec(utils.convertToDec(number, 16), 2);
                  break;
                case 'dec':
                  utils.convertFromDec(number, 2);
                  break;
                case 'octal':
                  utils.convertFromDec(utils.convertToDec(number, 8), 2);
                  break;
                case 'qua':
                  utils.convertFromDec(utils.convertToDec(number, 4), 2);
                  break;
                case 'bi':
                  el.resultBox.innerHTML = number;
                  break;
              }
            }
            
        });
    }
}

export default Form;