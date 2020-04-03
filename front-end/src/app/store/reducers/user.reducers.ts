import * as fromUser from '../actions/user.actions';

export interface UserState {
    token: string;
    email: string;
}

export const initialState: UserState = {
    token: '',
    email: ''
};

export function reducer(
    state: UserState = initialState,
    action: fromUser.UserActions
) {
    switch (action.type) {
        case fromUser.USER_LOGIN: {
            const { token, email } = action.payload;

            return {
                ...state,
                token,
                email
            };
        }

        case fromUser.USER_LOGOUT: {
            const token = '';
            const email = '';

            return {
                ...state,
                token,
                email
            };
        }

        default: {
            return state;
        }
    }
}

export const getToken = (state: UserState) => state.token;
export const getEmail = (state: UserState) => state.email;
