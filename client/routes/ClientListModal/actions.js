import { createActionTypes } from '@/lib/utils/helper';

export const ClientModalActions = createActionTypes('partnerList', [
  'GET_CLIENTMODAL_LIST',
  'CLIENTMODAL_LIST_LOADED',
  'CLIENTMODAL_LIST_FAILED',
]);

export function getClientModalList(obj) {
  return {
    type: ClientModalActions.GET_CLIENTMODAL_LIST,
    payload: {
      ...obj,
    },
  };
}

export function clientModalListLoaded(obj) {
  return {
    type: ClientModalActions.CLIENTMODAL_LIST_LOADED,
    payload: {
      ...obj,
    },
  };
}

export function clientModalListFailed(obj) {
  return {
    type: ClientModalActions.CLIENTMODAL_LIST_FAILED,
    payload: {
      ...obj,
    },
  };
}
