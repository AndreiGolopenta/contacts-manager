import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InputField } from '../../../models/form-field.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models/user.interface';

@Component({
    selector: 'app-user-sign-in',
    templateUrl: './user-sign-in.component.html',
    styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {
    formInputs: InputField[] = [
        { name: 'email', label: 'email', icon: 'email', required: false },
        { name: 'password', label: 'password', icon: 'lock', required: false }
    ];

    form: FormGroup = this.fb.group({
        email: [''],
        password: ['']
    });

    @Output() userSignIn = new EventEmitter<User>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    signIn() {
      this.userSignIn.emit(this.form.value);
    }
}
