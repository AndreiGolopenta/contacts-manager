import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './user.reducers';
import * as fromContacts from './contacts.reducers';

export interface StoreState {
    user: fromUser.UserState;
    contacts: fromContacts.ContactsState;
}

export const reducers: ActionReducerMap<StoreState> = {
    user: fromUser.reducer,
    contacts: fromContacts.reducer
};

export const getUserState = createFeatureSelector('user');
export const getContactsState = createFeatureSelector('contacts');
