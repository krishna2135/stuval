import { createActionTypes } from '@/lib/utils/helper';

export const LoginActions = createActionTypes('login', [
    'VERIFY_LOGIN',
    'LOGIN_SUCCESS',
    'LOGIN_FAIL',
    'RESET_LOGIN_ERROR',
]);

// import { LOGIN_REQUEST } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export const verifyLogin = (obj) => ({
    type: LoginActions.VERIFY_LOGIN,
    payload: {
        ...obj,
    },
});

export const loginSuccess = (obj) => ({
    type: LoginActions.LOGIN_SUCCESS,
    payload: {
        ...obj,
    },
});

export const loginFailure = (obj) => ({
    type: LoginActions.LOGIN_FAIL,
    payload: {
        ...obj,
    },
});

export const resetErrorForLogin = (obj) => ({
    type: LoginActions.RESET_LOGIN_ERROR,
    payload: {
        ...obj,
    },
});
