/*
 * loginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */
import { LoginActions } from './actions';

// The initial state of the App
export const initialState = {
  isFirstTime: false,
  errorMessage: '',
  authToken: null,
  isLoginFirst: false,
};

export const loginReducer = (state = initialState, action) => {
  const { LOGIN_SUCCESS, RESET_LOGIN_ERROR, LOGIN_FAIL } = LoginActions;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFirstTime: action.payload.message.isFirstTime,
        authToken: action.payload.message.token,
        language: action.payload.message.language,
        errorMessage: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isLoggedIn: false,
      };
    case RESET_LOGIN_ERROR:
      return {
        ...state,
        errorMessage: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
