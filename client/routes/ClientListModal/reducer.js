import { ClientModalActions } from './actions';

export const initialState = {
  clientModalList: [],
  totalPages: 0,
  currentPage: 0,
  clientList: [],
  loading: true,
};

export const clientModalListReducer = (state = initialState, action) => {
  const { GET_CLIENTMODAL_LIST, CLIENTMODAL_LIST_LOADED } = ClientModalActions;
  switch (action.type) {
    case GET_CLIENTMODAL_LIST:
      return {
        ...state,
        loading: true,
      };
    case CLIENTMODAL_LIST_LOADED:
      return {
        ...state,
        clientModalList: action.payload.clientModalList,
        loading: false,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        clientList: action.payload.clientModalList.clientList,
      };
    default:
      return state;
  }
};
