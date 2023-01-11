import Form from "./components/form.js";

const app = {
    initForm: function() {
        const thisApp = this;
        thisApp.form = new Form;
    },
    init: function() {
        const thisApp = this;
        thisApp.initForm();
    }
};
app.init();