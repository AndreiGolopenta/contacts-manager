import { Component, Input } from '@angular/core';
import { InputField } from 'src/app/models/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
    @Input() data: InputField;
    @Input() parent: FormGroup;

    get requiredError() {
        return (
            this.parent.get(this.data.label).hasError('required') &&
            this.parent.get(this.data.label).touched
        );
    }

    get emailError() {
        return (
            this.parent.get(this.data.label).hasError('invalidEmail') &&
            !this.requiredError &&
            this.parent.get(this.data.label).touched
        );
    }

    get passwordLength() {
        return (
            this.parent.get(this.data.label).hasError('minlength') &&
            this.parent.get(this.data.label).touched
        );
    }
}
