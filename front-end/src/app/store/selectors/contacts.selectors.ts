import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromContacts from '../reducers/contacts.reducers';

export const getContactsForUser = createSelector(
    fromFeature.getContactsState,
    fromContacts.getContacts
);

export const getTotal = createSelector(
    fromFeature.getContactsState,
    fromContacts.getTotal
);
