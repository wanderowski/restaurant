import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import isEmpty  from '../validation/isEmpty'
import { message } from 'antd'


function* addReview(action) {
    const {data} = action
    try {
        const review = yield axios.post('http://37.18.30.124:9000/api/review', data).then(res => res.data)
        yield put({type: types.ADD_REV_SUCCESS, payload: review})
    } catch(err) {
        if(isEmpty(localStorage['token'])) {
            message.error('Вы не авторизованы. Зарегистрируйтесь или авторизуйтесь.')
        }
        yield put({type: types.ADD_REV_FAILED, err})
    }
}

function* deleteReview(action) {
    const {data} = action
    try {

        yield axios.delete(`http://37.18.30.124:9000/api/review/${data}`).then(res => res.data)
        yield getReviews()
        yield put({type: types.DEL_REV_SUCCESS})
    } catch(err) {
        yield put({type: types.DEL_REV_FAILED, err})
    }
}

function* getReviews() {
    try {
        const reviews = yield axios.get('http://37.18.30.124:9000/api/review').then(res => res.data)
        yield put({type: types.GET_REVS_SUCCESS, payload: reviews})
    } catch(err) {
        yield put({type: types.GET_REVS_FAILED, err})
    }
}

export function* revSaga() {
    yield all([
        yield takeLatest(types.ADD_REV, addReview),
        yield takeLatest(types.DEL_REV, deleteReview),
        yield takeLatest(types.GET_REVS, getReviews)
        ])
}