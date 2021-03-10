import { all } from '@redux-saga/core/effects';
import { userListRuntime } from './user-list/sagas';

export default function* rootSagas() {
    yield all([
        userListRuntime(),
    ])
}