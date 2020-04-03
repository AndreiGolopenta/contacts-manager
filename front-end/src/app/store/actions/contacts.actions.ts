import { Action } from '@ngrx/store';
import { Contact, ContactToken } from '../../models/contact.interface';

export const LOAD_CONTACTS = '[app] Load Contacts';
export const LOAD_CONTACTS_SUCCESS = '[app] Load Contacts Success';
export const ADD_CONTACT = '[dashboard] Add Contact';
export const ADD_CONTACT_SUCCESS = '[dashboard] Add Contact Success';
export const UPDATE_CONTACT = '[dashboard] Update Contact';
export const UPDATE_CONTACT_SUCCESS = '[dashboard] Update Contact Success';
export const DELETE_CONTACT = '[dashboard] Delete Contact';
export const DELETE_CONTACT_SUCCESS = '[dashboard] Delete Contact Success';

export class LoadContacts implements Action {
    readonly type = LOAD_CONTACTS;
    constructor(public payload: string) {}
}

export class LoadContactsSuccess implements Action {
    readonly type = LOAD_CONTACTS_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class AddContact implements Action {
    readonly type = ADD_CONTACT;
    constructor(public payload: ContactToken) {}
}

export class AddContactSuccess implements Action {
    readonly type = ADD_CONTACT_SUCCESS;
    constructor(public payload: Contact) {}
}

export class UpdateContact implements Action {
    readonly type = UPDATE_CONTACT;
    constructor(public payload: ContactToken) {}
}

export class UpdateContactSuccess implements Action {
    readonly type = UPDATE_CONTACT_SUCCESS;
    constructor(public payload: Contact) {}
}

export class DeleteContact implements Action {
    readonly type = DELETE_CONTACT;
    constructor(public payload: ContactToken) {}
}

export class DeleteContactSuccess implements Action {
    readonly type = DELETE_CONTACT_SUCCESS;
    constructor(public payload: string) {}
}

export type ContactsActions =
    | LoadContacts
    | LoadContactsSuccess
    | AddContact
    | AddContactSuccess
    | UpdateContact
    | UpdateContactSuccess
    | DeleteContact
    | DeleteContactSuccess;
