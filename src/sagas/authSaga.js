import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode'
import {message} from 'antd'

function* signup(action) {
    const {data} = action;

    try {
        const authResponse = yield axios.post('http://37.18.30.124:9000/api/users/register', data).then(res => res.data)
        yield put({type: types.SIGN_UP_SUCCESS, payload: authResponse})
    } catch(err) {
        yield put({type: types.SIGN_UP_FAILED, err})
    }
}

function* signin(action) {
    const {data} = action
    try {
        const auth = yield axios.post('http://37.18.30.124:9000/api/users/login', data).then(res => res.data)
        const {token, role} = auth
        setAuthToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
        const decoded = jwt_decode(token)
        yield put({type: types.SET_CURRENT_USER, payload: decoded})
        if(localStorage['role'] === 'admin') {
            window.location.href='/dashboard/restaurant'
        }
        else if(localStorage['role'] === 'user') {
            window.location.href='/'
        }
        else {
            window.location.href='/'
        }
    }
    catch(err) {
        message.error('Ошибка при авторизации. Попробуйте еще раз')
        yield put({type: types.SIGN_IN_FAILED, err})
    }
}

function* logout() {
    try {
        setAuthToken(false)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        yield put({type: types.SET_CURRENT_USER, payload: {}})
        yield put({type: types.LOG_OUT_SUCCESS})
        window.location.href = '/'
    }
    catch(err) {
        yield put({type: types.LOG_OUT_FAILED, err})
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.SIGN_UP, signup),
        yield takeLatest(types.SIGN_IN, signin),
        yield takeLatest(types.LOG_OUT, logout)
    ])
}