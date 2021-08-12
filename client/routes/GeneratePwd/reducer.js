import { NewPswdAction } from './actions';

export const initialState = {
    loading: false,
    isLoggedIn: false,
    errorMessage: '',
    authToken: null,
};

export const newPswdReducer = (state = initialState, action) => {
    const {
        NEW_PSWD_REQUEST,
        NEW_PSWD_SUCCESS,
        NEW_PSWD_FAIL
    } = NewPswdAction;

    switch (action.type) {
        case NEW_PSWD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case NEW_PSWD_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                authToken: action.payload.authToken,
                errorMessage: '',
            };
        case NEW_PSWD_FAIL:
            return {
                ...state,
                errorMessage: '',
                isLoggedIn: false,
            };
        default:
            return state;
    }
};