import domready from './domready';

let test, errorMsg, result;

export default class FormValidator {
    constructor(form) {
        this.formContainer = form;
        this.form = this.formContainer.querySelector('.form');
        this.inputs = [...this.form.querySelectorAll('.input')];

        this.form.addEventListener("submit", event => {
            this.validateInputs(event);
            this.logOutData();
        });
    }

    validateInputs(event) {
        event.preventDefault();
        this.inputs.forEach(input => {
            this.checkInput(input);
            this.validateInput(input, test, errorMsg);
        });

        if (!document.querySelector('.invalid-feedback')){
            this.displaySucess();
        }
    }

    checkInput(input) {
        switch(input.name) {
            case 'name':
                test = /^((?=.{1,20}$)[^0-9]*)$/;
                errorMsg = "Name can only contain letters and a maximum of 20 characters."
            break;
            
            case 'email':
                test = /(.+)@(.+){2,}\.(.+){2,}/;
                errorMsg = "You must enter a valid email address."
            break;

            case 'password':
                test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                errorMsg = "Your password must contain at least one upper character, one lower character and a number. It must be at least eight characters long."
            break;

            case 'confirm-password':
                this.checkPasswordsMatch(input);
                test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                errorMsg = "Your passwords do not match";
            break;
        }
        return test, errorMsg;
    }

    validateInput(input, test, errorMsg) {
        this.testInput(test, input);
        if (result === false) {
            this.removeError(input);
            this.createError(input, errorMsg)
        } else {
            this.removeError(input);
        }
    }
        
    testInput(test, input) {
        result = test.test(input.value);
        return result;
    }

    checkPasswordsMatch(input) {
        const password = document.getElementsByName('password')[0];
        const confirmPassword = document.getElementsByName('confirm-password')[0];

        if (password.value !== confirmPassword.value) {
            this.removeError(input);
            this.createError(input, errorMsg);
        } else {
            this.removeError(input);
        }
    }

    createError(input, errorMsg){
        const errorEl = document.createElement('div');
        errorEl.setAttribute('class', 'invalid-feedback');
        errorEl.style.display = "block";
        errorEl.innerText = errorMsg;
        input.parentNode.insertBefore(errorEl, input.nextSibling);
    }

    removeError(input){
        const error = input.parentNode.querySelector('.invalid-feedback');
        if (input.parentNode.contains(error)) {
            input.parentNode.removeChild(error);
        }
    }

    displaySucess(){
        this.form.style.display = "none";
        const successEl = document.createElement('h3');
        successEl.setAttribute('class', 'valid-feedback mb-5');
        successEl.style.display = "block";
        successEl.innerText = "You've successfully submitted the form. Check the console for form data";
        this.form.parentNode.insertBefore(successEl, this.form.nextSibling);
    }

    logOutData(){
        const formData = new FormData(this.form);
        const entries = formData.entries();
        for (let input of entries) {
            console.log(input[0] + ': ' + input[1]);
        }
    }
}

function formValidation() {
    const formValildator = [...document.querySelectorAll('.js-form')].map(form => new FormValidator(form));
}
    
domready(formValidation);
    