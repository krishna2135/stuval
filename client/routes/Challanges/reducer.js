/*
 * loginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */
import { HomeActions } from './actions';

// The initial state of the App
export const initialState = {
  errorMessage: '',
  adminDetails: {},
  dashBoardLogo: '',
  headerBgColor: '',
  headerLogo: '',
  headerTxtColor: '',
  loading: true
};

export const homeReducer = (state = initialState, action) => {
  const {
    GET_ADMIN_DETAILS,
    ADMIN_DETAILS_LOADED } = HomeActions;

  switch (action.type) {
    case GET_ADMIN_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_DETAILS_LOADED:
      return {
        ...state,
        loading: false,
        adminDetails: action.payload.adminDetails,
        dashBoardLogo: action.payload.adminDetails.partnerDashboardLogo,
        headerBgColor: action.payload.adminDetails.partnerHeaderBackgroundColor,
        headerLogo: action.payload.adminDetails.partnerHeaderLogo,
        headerTxtColor: action.payload.adminDetails.partnerHeaderTextColor
      };
    default:
      return state;
  }
};
