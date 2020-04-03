import { AbstractControl, FormControl } from '@angular/forms';

export class SignUpValidation {

    static emailValidation(control: AbstractControl) {
        const regexp = /^\w+(\.|_)?\w+@\w+\.(com|net|org|ro)$/i;
        const valid = regexp.test(control.value);
        return valid ? null : { invalidEmail: true };
    }

    static repeatPassword(control: AbstractControl) {
        const password = control.get('password') as FormControl;
        const repeatPassword = control.get('repeat password') as FormControl;

        return password.value === repeatPassword.value
            ? null
            : { checkPassword: true };
    }
}
