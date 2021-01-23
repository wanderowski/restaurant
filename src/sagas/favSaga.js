import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'


function* addFavourite(action) {
    const {data} = action
    try {
        const favourite = yield axios.post('http://37.18.30.124:9000/api/favorite', data).then(res => res.data)
        yield getFavorites()
        yield put({type: types.ADD_FAV_SUCCESS, payload: favourite})
    } catch(err) {
        yield put({type: types.ADD_FAV_FAILED, err})
    }
}


function* getFavorites() {
    try {
        const favorites = yield axios.get('http://37.18.30.124:9000/api/favorite').then(res => res.data)
        yield put({type: types.GET_FAVS_SUCCESS, payload: favorites})
    } catch(err) {
        yield put({type: types.GET_FAVS_FAILED, err})
    }
}


export function* favSaga() {
    yield all([
        yield takeLatest(types.ADD_FAV, addFavourite),
        yield takeLatest(types.GET_FAVS, getFavorites),


        ])
}