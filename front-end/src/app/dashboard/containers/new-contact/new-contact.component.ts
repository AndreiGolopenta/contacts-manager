import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Contact, ContactToken } from 'src/app/models/contact.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
    token: string;
    subscription: Subscription;

    constructor(
        private store: Store<fromStore.StoreState>,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.subscription = this.store
            .select(fromStore.getToken)
            .subscribe((data: string) => (this.token = data));
    }

    handleCreateContact(contact: Contact) {
        const request: ContactToken = { contact, token: this.token };
        this.store.dispatch(new fromStore.AddContact(request));
        this.router.navigate(['/dashboard'])
    }
}
