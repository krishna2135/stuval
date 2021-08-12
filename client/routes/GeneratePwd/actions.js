import { createActionTypes } from '@/lib/utils/helper';

export const NewPswdAction = createActionTypes('newpswd', [
    'NEW_PSWD_REQUEST',
    'NEW_PSWD_SUCCESS',
    'NEW_PSWD_FAIL',
]);

export const reqNewPassword = (obj) => {
    return {
        type: NewPswdAction.NEW_PSWD_REQUEST,
        payload: {
            ...obj,
        },
    };
};

export const newPswdSuccess = (obj) => {
    return {
        type: NewPswdAction.NEW_PSWD_SUCCESS,
        payload: {
            ...obj,
        },
    };
};

export const newPswdFail = (obj) => {
    return {
        type: NewPswdAction.NEW_PSWD_FAIL,
        payload: {
            ...obj,
        },
    };
};