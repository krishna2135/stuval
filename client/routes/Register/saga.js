import { call, put, takeLatest } from 'redux-saga/effects';

import swal from 'sweetalert';
import { apiResource } from '@/lib/utils/api';

import {
    GraphActions, graphListLoaded, graphListFailed, studentSkillsLoaded, studentSkillsFailed,
    signSuccess, signFailure
} from './actions';

function* getGraphList(dObj) {
    try {
        const url = '/getStudentTypeList';

        const res = yield call(apiResource.get, url);

        if (res.status === 1) {
            yield put(
                graphListLoaded({
                    graphTypeList: res.response,
                }),
            );
        } else {
            yield put(
                graphListLoaded({
                    graphTypeList: [],
                }),
            );
        }
    } catch (e) {
        yield put(
            graphListFailed({
                message: 'Something went wrong',
            }),
        );
    }
}


/////
function* getStudentSkillList(dObj) {
    try {
        const url = '/getSkillSetList';

        const res = yield call(apiResource.get, url);

        if (res.status === 1) {
            yield put(
                studentSkillsLoaded({
                    skillTypeList: res.response,
                }),
            );
        } else {
            yield put(
                studentSkillsLoaded({
                    skillTypeList: [],
                }),
            );
        }
    } catch (e) {
        yield put(
            studentSkillsFailed({
                message: 'Something went wrong',
            }),
        );
    }
}
/////post
function* verifySignup(dObj) {
    try {
        const url = '/registerStudent';
        const res = yield call(apiResource.post, url, dObj.payload);
        if (res.status === 1) {
            yield put(
                signSuccess({
                    message: res.message,
                }),
            );
            // swal(res.message, "", "success")
            window.location.assign('/login');

        }
        else {
            yield put(
                signFailure({
                    message: res.message,
                }),
            );
        }
    } catch (e) {
        yield put(
            signFailure({
                message: 'Something went wrong',
            }),
        );
    }
}

function* graphListSaga() {
    yield takeLatest(GraphActions.GET_GRAPH_LIST, getGraphList);
    yield takeLatest(GraphActions.GET_SKILLS_LIST, getStudentSkillList);
    yield takeLatest(GraphActions.VERIFY_SIGNUP, verifySignup);
}
export default graphListSaga;



