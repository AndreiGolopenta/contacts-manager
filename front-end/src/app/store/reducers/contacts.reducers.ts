import * as fromContacts from '../actions/contacts.actions';
import { Contact } from 'src/app/models/contact.interface';

export interface ContactsState {
    contacts: Contact[];
    total: number;
}

export const initialState: ContactsState = {
    contacts: undefined,
    total: 0
};

export function reducer(
    state: ContactsState = initialState,
    action: fromContacts.ContactsActions
) {
    switch (action.type) {
        case fromContacts.DELETE_CONTACT:
        case fromContacts.UPDATE_CONTACT:
        case fromContacts.ADD_CONTACT:
        case fromContacts.LOAD_CONTACTS: {
            return {
                ...state
            };
        }

        case fromContacts.LOAD_CONTACTS_SUCCESS: {
            const contacts = action.payload;
            const total = contacts.length;

            return {
                ...state,
                contacts,
                total
            };
        }

        case fromContacts.ADD_CONTACT_SUCCESS: {
            const contacts = [...state.contacts, action.payload];
            const total = contacts.length;

            return {
                ...state,
                contacts,
                total
            };
        }

        case fromContacts.UPDATE_CONTACT_SUCCESS: {
            const contacts = state.contacts.map((contact: Contact) => {
                if (contact._id === action.payload._id) {
                    return action.payload;
                } else {
                    return contact;
                }
            });

            return {
                ...state,
                contacts
            };
        }

        case fromContacts.DELETE_CONTACT_SUCCESS: {
            const contacts = state.contacts.filter((contact: Contact) => {
                return contact._id !== action.payload;
            });

            return {
                ...state,
                contacts
            }
        }

        default: {
            return state;
        }
    }
}

export const getContacts = (state: ContactsState) => state.contacts;
export const getTotal = (state: ContactsState) => state.total;
