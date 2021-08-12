import { createActionTypes } from '@/lib/utils/helper';

export const HomeActions = createActionTypes('home', [
  'GET_ADMIN_DETAILS',
  'ADMIN_DETAILS_LOADED',
  'ADMIN_DETAILS_FAILED',
]);

// import { LOGIN_REQUEST } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export const getAdminDetails = () => {
  return {
    type: HomeActions.GET_ADMIN_DETAILS,
  };
};

export const adminDetailsLoaded = (obj) => {
  return {
    type: HomeActions.ADMIN_DETAILS_LOADED,
    payload: {
      ...obj,
    },
  };
};

export const adminDetailsFailed = (obj) => {
  return {
    type: HomeActions.ADMIN_DETAILS_FAILED,
    payload: {
      ...obj,
    },
  };
};
