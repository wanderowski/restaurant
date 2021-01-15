import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga'
import {kitchenSaga} from './kitchenSaga'
import {restSaga} from './restSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        kitchenSaga(),
        restSaga()

    ])
} 