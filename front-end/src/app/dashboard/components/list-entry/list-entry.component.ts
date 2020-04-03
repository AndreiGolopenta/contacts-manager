import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Component({
    selector: 'app-list-entry',
    templateUrl: './list-entry.component.html',
    styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent {
    @Input() contact: Contact;
}
