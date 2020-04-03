import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

const API: string = 'http://localhost:3000/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {}

    signUp(user: User): Observable<string> {
        return this.http.post<string>(`${API}/signUp`, user);
    }

    signIn(user: User): Observable<User> {
        return this.http.post<User>(`${API}/signIn`, user);
    }
}
