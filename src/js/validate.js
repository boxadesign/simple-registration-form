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

    checkInput(input) {
        if(input.name === 'name') {
            test = /^((?=.{1,20}$)[^0-9]*)$/;
            errorMsg = "Name can only contain letters and a maximum of 20 characters."
        } else if (input.name === 'email'){
            test = /(.+)@(.+){2,}\.(.+){2,}/;
            errorMsg = "You must enter a valid email address."
        } else if (input.name === 'password') {
            test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            errorMsg = "Your password must contain at least one upper character, one lower character and a number. It must be at least eight characters long."
        } else if (input.name === 'confirm-password') {
            this.checkPasswordsMatch(input);
            test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            errorMsg = "Your passwords do not match";
        }
        return test, errorMsg;
    }

    checkPasswordsMatch(input) {
        const password = document.getElementsByName('password')[0];
        const confirmPassword = document.getElementsByName('confirm-password')[0];
        if(password.value !== confirmPassword.value) {
            this.removeError(input);
            this.createError(input, errorMsg);
        } else {
            this.removeError(input);
        }
    }
        
    testInput(test, input) {
        result = test.test(input.value);
        return result;
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
    