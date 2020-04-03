import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducers';

export const getToken = createSelector(
    fromFeature.getUserState,
    fromUser.getToken
);

export const getEmail = createSelector(
    fromFeature.getUserState,
    fromUser.getEmail
);
