import { el } from "../settings.js";
import { utils } from "../utils.js";

class Select {
    constructor(){
        const thisSelect = this;
        thisSelect.setPlaceholderOnChange();
        thisSelect.setTitleOnChange();
    }
    setPlaceholderOnChange(){
        const thisSelect = this;
        thisSelect.from = el.selectFrom;
        thisSelect.from.addEventListener('change', () => {
            const index = thisSelect.from.selectedIndex;
            el.input.placeholder = utils.setPlaceholder(thisSelect.from.options[index].text);
            el.resultBox.innerHTML = '';
          });
    }
    setTitleOnChange(){
        const thisSelect = this;
        thisSelect.to = el.selectTo;
        thisSelect.to.addEventListener('change', () => {
            const index = thisSelect.to.selectedIndex;
            el.resultTitle.innerHTML = utils.setTitle(thisSelect.to.options[index].text);
            el.resultBox.innerHTML = '';
          });
          
    }
}

export default Select;