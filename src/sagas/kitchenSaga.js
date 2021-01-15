import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* getKitchens() {
    try {
        const kitchens = yield axios.get('http://37.18.30.124:9000/api/kitchen').then(res => res.data)
        yield put({type: types.GET_KITCHENS_SUCCESS, payload: kitchens})
    } catch(err) {
        yield put({type: types.GET_KITCHENS_FAILED, err})
    }
}

function* addKitchen(action) {
    const {data} = action
    try {
        const kitchens = yield axios.post('http://37.18.30.124:9000/api/kitchen', data).then(res => res.data)
        yield put({type: types.ADD_KITCHEN_SUCCESS, payload: kitchens})
        yield getKitchens()
    } catch(err) {
        yield put({type: types.ADD_KITCHEN_FAILED, err})
    }

}

function* deleteKitchen(action) {
    const {data} = action
    try {
        yield axios.delete(`http://37.18.30.124:9000/api/kitchen/${data}`).then(res => res.data)
        yield put({type: types.DEL_KITCHEN_SUCCESS})
        yield getKitchens()
    } catch(err) {
        yield put({type: types.DEL_KITCHEN_FAILED, err})
    }

}

function* editKitchen(action) {
    const {data} = action
    try {
        yield axios.put(`http://37.18.30.124:9000/api/kitchen/${data.id}`, data).then(res => res.data)
        yield put({type: types.EDIT_KITCHEN_SUCCESS})
        yield getKitchens()
    } catch(err) {
        yield put({type: types.EDIT_KITCHEN_FAILED, err})
    }

}


export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.GET_KITCHENS, getKitchens),
        yield takeLatest(types.ADD_KITCHEN, addKitchen),
        yield takeLatest(types.DEL_KITCHEN, deleteKitchen),
        yield takeLatest(types.EDIT_KITCHEN, editKitchen)
        ])
}