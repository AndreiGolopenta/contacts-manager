import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InputName } from '../../../models/input-name.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpValidation } from '../../../user-authentication/components/user-sign-up/sign-up-validation.validators';
import { Contact } from 'src/app/models/contact.interface';

@Component({
    selector: 'app-form-template',
    templateUrl: './form-template.component.html',
    styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
    inputs: InputName = {
        personal: ['name', 'email', 'job', 'location'],
        social: ['facebook', 'github', 'twitter', 'linkedin']
    };

    tags: string[] = ['friends', 'family', 'acquaintances', 'following'];

    form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, SignUpValidation.emailValidation]],
        job: [''],
        location: [''],
        tagSelect: [''],
        facebook: [''],
        github: [''],
        twitter: [''],
        linkedin: ['']
    });

    @Input() data: Contact;

    @Output() createContact = new EventEmitter<Contact>();
    @Output() updateContact = new EventEmitter<Contact>();
    @Output() deleteContact = new EventEmitter<Contact>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        if (this.data) {
            for (let el of this.inputs.personal) {
                this.setData(el, this.data);
            }
            for (let el of this.inputs.social) {
                this.setData(el, this.data);
            }
            this.form.get('tagSelect').setValue(this.data.tagSelect);
        }
    }

    setData(formControlName: string, contact: Contact) {
        this.form.get(formControlName).setValue(contact[formControlName]);
    }

    required(value: string): boolean {
        switch (value) {
            case 'name': {
                return true;
            }
            case 'email': {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    requiredError(formControlName: string): boolean {
        return (
            this.form.get(formControlName).hasError('required') &&
            this.form.get(formControlName).touched
        );
    }

    emailError(formControlName: string): boolean {
        return (
            this.form.get(formControlName).hasError('invalidEmail') &&
            !this.requiredError(formControlName) &&
            this.form.get(formControlName).touched
        );
    }

    onSubmit() {
        this.createContact.emit(this.form.value);
        this.updateContact.emit(this.form.value);
    }

    handleDeleteContact() {
        this.deleteContact.emit(this.data);
    }
}
