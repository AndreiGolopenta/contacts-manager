import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.interface';

const API: string = 'http://localhost:3000/contacts';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
    })
};

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    setHeader(token: string) {
        httpOptions.headers = httpOptions.headers.set(
            'Authorization',
            `Bearer ${token}`
        );
    }

    constructor(private http: HttpClient) {}

    getContacts(token: string): Observable<Contact[]> {
        this.setHeader(token);
        return this.http.get<Contact[]>(API, httpOptions);
    }

    createContact(contact: Contact, token: string): Observable<Contact> {
        this.setHeader(token);
        return this.http.post<Contact>(API, contact, httpOptions);
    }

    updateContact(
        contact: Contact,
        token: string,
        id: string
    ): Observable<Contact> {
        this.setHeader(token);
        return this.http.patch<Contact>(`${API}/${id}`, contact, httpOptions);
    }

    deleteContact(contact: Contact, token: string): Observable<string> {
        this.setHeader(token);
        return this.http.delete<string>(`${API}/${contact._id}`, httpOptions);
    }
}
