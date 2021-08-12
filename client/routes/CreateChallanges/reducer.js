import { GraphActions } from './actions';
import { SkillsActions } from './actions';
export const initialState = {
    graphTypeList: [],
    skillTypeList: [],
    message: ''
};

export const graphListReducer = (state = initialState, action) => {
    const { GRAPH_LIST_LOADED, SKILLS_LIST_LOADED, SIGNUP_SUCCESS,
        SIGNUP_FAIL } = GraphActions;
    switch (action.type) {
        case GRAPH_LIST_LOADED:
            return {
                ...state,
                graphTypeList: action.payload.graphTypeList,
            };
        case SKILLS_LIST_LOADED:
            return {
                ...state,
                skillTypeList: action.payload.skillTypeList,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                message: action.payload.message,
            };
        default:
            return state;
    }
};
////////////////////post

