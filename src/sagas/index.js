import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga'
import {kitchenSaga} from './kitchenSaga'
import {restSaga} from './restSaga'
import {revSaga} from './revSaga'
import {favSaga} from './favSaga'
import {orderSaga} from './orderSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        kitchenSaga(),
        restSaga(),
        revSaga(),
        favSaga(),
        orderSaga()

    ])
} 