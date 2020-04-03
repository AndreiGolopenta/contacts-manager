import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InputField } from '../../../models/form-field.interface';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';
import { SignUpValidation } from './sign-up-validation.validators';
import { User } from '../../../models/user.interface';

@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {
    formInputs: InputField[] = [
        { name: 'email', label: 'email', icon: 'email', required: true },
        { name: 'password', label: 'password', icon: 'lock', required: true },
        {
            name: 'password',
            label: 'repeat password',
            icon: 'lock',
            required: true
        }
    ];

    form: FormGroup = this.fb.group(
        {
            email: [
                '',
                [Validators.required, SignUpValidation.emailValidation]
            ],
            password: ['', [Validators.required, Validators.minLength(8)]],
            'repeat password': [
                '',
                [Validators.required, Validators.minLength(8)]
            ]
        },
        { validator: SignUpValidation.repeatPassword }
    );

    @Output() userSignUp = new EventEmitter<User>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    signUp() {
        const { ['repeat password']: repeatPassword, ...user } = this.form.value;
        this.userSignUp.emit(user);
    }

    get repeatPasswordError() {
        const passwordOne = this.form.get('password') as FormControl;
        const passwordTwo = this.form.get('repeat password') as FormControl;
        if (
            this.form.hasError('checkPassword') &&
            passwordOne.dirty &&
            !passwordTwo.hasError('minlength') &&
            passwordTwo.dirty &&
            !passwordTwo.hasError('required')
        ) {
            return true;
        } else {
            return false;
        }
    }
}
