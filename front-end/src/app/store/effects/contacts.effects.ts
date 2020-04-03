import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsService } from '../../services/contacts.service';
import { Contact, ContactToken } from '../../models/contact.interface';

@Injectable()
export class ContactsEffects {
    constructor(
        private contactsService: ContactsService,
        private actions$: Actions
    ) {}

    @Effect()
    loadContacts$ = this.actions$
        .pipe(ofType(contactsActions.LOAD_CONTACTS))
        .pipe(
            map((action: contactsActions.LoadContacts) => action.payload),
            switchMap((data: string) => {
                return this.contactsService.getContacts(data).pipe(
                    map((contacts: Contact[]) => {
                        return new contactsActions.LoadContactsSuccess(
                            contacts
                        );
                    })
                );
            })
        );

    @Effect()
    addContact$ = this.actions$.pipe(ofType(contactsActions.ADD_CONTACT)).pipe(
        map((action: contactsActions.AddContact) => action.payload),
        switchMap((data: ContactToken) => {
            return this.contactsService
                .createContact(data.contact, data.token)
                .pipe(
                    map((contact: Contact) => {
                        return new contactsActions.AddContactSuccess(contact);
                    })
                );
        })
    );

    @Effect()
    updateContact$ = this.actions$
        .pipe(ofType(contactsActions.UPDATE_CONTACT))
        .pipe(
            map((action: contactsActions.UpdateContact) => action.payload),
            switchMap((data: ContactToken) => {
                return this.contactsService
                    .updateContact(data.contact, data.token, data.id)
                    .pipe(
                        map((contact: Contact) => {
                            return new contactsActions.UpdateContactSuccess(
                                contact
                            );
                        })
                    );
            })
        );

    @Effect()
    deleteContact$ = this.actions$
        .pipe(ofType(contactsActions.DELETE_CONTACT))
        .pipe(
            map((action: contactsActions.DeleteContact) => action.payload),
            switchMap((data: ContactToken) => {
                return this.contactsService
                    .deleteContact(data.contact, data.token)
                    .pipe(
                        map((id: string) => {
                            return new contactsActions.DeleteContactSuccess(id);
                        })
                    );
            })
        );
}
