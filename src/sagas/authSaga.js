import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* signup(action) {
    const {data} = action;

    try {
        const authResponse = yield axios.post('http://37.18.30.124:9000/api/users/register', data).then(res => res.data)
        yield put({type: types.SIGN_UP_SUCCESS, payload: authResponse})
    } catch(err) {
        yield put({type: types.SIGN_UP_FAILED, err})
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.SIGN_UP, signup)
    ])
}