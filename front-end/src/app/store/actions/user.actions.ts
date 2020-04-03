import { Action } from '@ngrx/store';
import { User } from '../../models/user.interface';

export const USER_LOGIN = '[user-authentication] User Login';
export const USER_LOGOUT = '[dashboard] User Logout';

export class UserLogin implements Action {
    readonly type = USER_LOGIN;
    constructor(public payload: User) {}
}

export class UserLogout implements Action {
    readonly type = USER_LOGOUT;
}

export type UserActions = UserLogin | UserLogout;
