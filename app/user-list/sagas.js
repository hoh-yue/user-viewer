import { call, put, takeLatest } from 'redux-saga/effects';

import { avatarApiCall, userListApiCall } from './api';
import * as userListActions from './actions';
import { navigate } from '../rootNavigation';

export function* userListRuntime() {
    yield takeLatest(userListActions.NAVIGATE_TO_USER_DETAILS, navigateToUserDetails);
    yield takeLatest(userListActions.GET_USER_LISTS_REQUEST, fetchUser);
    yield takeLatest(userListActions.GET_USER_AVATAR_REQUEST, getAvatar);
}

function* fetchUser() {
    const response = yield call(userListApiCall);
    if (response) {
        yield put({
            type: userListActions.GET_USER_LISTS_SUCCESS,
            payload: response,
        });
    }
}

function* navigateToUserDetails({ payload }) {
    yield put({ type: userListActions.SELECT_USER, payload });
    yield put({ type: userListActions.GET_USER_AVATAR_REQUEST });
    navigate('UserDetails');
}

function* getAvatar() {
    const response = yield call(avatarApiCall);
    if (response) {
        console.log(response);
        yield put({
            type: userListActions.GET_USER_AVATAR_SUCCESS,
            payload: response,
        });
    }
}
