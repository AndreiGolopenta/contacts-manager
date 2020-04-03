import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contacts$: Observable<Contact[]>;

    constructor(private store: Store<fromStore.StoreState>) {}

    ngOnInit(): void {
        this.contacts$ = this.store.select(fromStore.getContactsForUser);
    }
}
