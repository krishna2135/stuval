import { createActionTypes } from '@/lib/utils/helper';

export const GraphActions = createActionTypes('graphList', [
    'GET_GRAPH_LIST',
    'GRAPH_LIST_LOADED',
    'GRAPH_LIST_FAILED',
    'GET_SKILLS_LIST',
    'SKILLS_LIST_LOADED',
    'SKILLS_LIST_FAILED',
    'VERIFY_SIGNUP',
    'SIGNUP_SUCCESS',
    'SIGNUP_FAIL',
    'RESET_SIGNUP_ERROR',
]);

export function getGraphList(obj) {
    return {
        type: GraphActions.GET_GRAPH_LIST,
    };
}

export function graphListLoaded(obj) {
    return {
        type: GraphActions.GRAPH_LIST_LOADED,
        payload: {
            ...obj,
        },
    };
}

export function graphListFailed(obj) {
    return {
        type: GraphActions.GRAPH_LIST_FAILED,
    };
}

//////////


export function getStudentSkillList(obj) {
    return {
        type: GraphActions.GET_SKILLS_LIST,

    };
}

export function studentSkillsLoaded(obj) {
    return {
        type: GraphActions.SKILLS_LIST_LOADED,
        payload: {
            ...obj,
        },
    };
}

export function studentSkillsFailed(obj) {
    return {
        type: GraphActions.SKILLS_LIST_FAILED,
    };
}
/////post
export const verifySignup = (obj) => ({
    type: GraphActions.VERIFY_SIGNUP,
    payload: {
        ...obj,
    },
});

export const signSuccess = (obj) => ({
    type: GraphActions.SIGNUP_SUCCESS,
    payload: {
        ...obj,
    },
});

export const signFailure = (obj) => ({
    type: GraphActions.SIGNUP_FAIL,
    payload: {
        ...obj,
    },
});

export const resetErrorForSignup = (obj) => ({
    type: GraphActions.RESET_SIGNUP_ERROR,
    payload: {
        ...obj,
    },
});