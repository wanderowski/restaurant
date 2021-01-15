import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* getRestaurants(action) {
    const { data } = action
    try {
        const restaurants = yield axios.get(`http://37.18.30.124:9000/api/restaurant?query=${data.query}&page=${data.page}`).then(res => res.data)
        yield put({type: types.GET_RESTS_SUCCESS, payload: restaurants})
    } catch(err) {
        yield put({type: types.GET_RESTS_FAILED, err})
    }
}



function* addRestaurant(action) {
    const {data} = action
    try {
        const fm = new FormData();
        fm.append('image', data.image)
        fm.append('name', data.name)
        fm.append('location', data.location)
        fm.append('phone', data.phone)
        fm.append('amountOfPlace', data.amountOfPlace)
        fm.append('averageBill', data.averageBill)
        fm.append('kitchens', data.kitchens)
        fm.append('rate', data.rate)

        const newRestaurant = yield axios.post('http://37.18.30.124:9000/api/restaurant', fm).then(res => res.data)
        yield put({type: types.ADD_REST_SUCCESS, payload: newRestaurant})
        yield getRestaurants({query: '', page: ''})
    } catch(err) {
        yield put({type: types.ADD_REST_FAILED, err})
    }
}

function* deleteRestaurant(action) {
    const {data} = action
    try {
        yield axios.delete(`http://37.18.30.124:9000/api/restaurant/${data}`).then(res => res.data)
        yield put({type: types.DEL_REST_SUCCESS})
        yield getRestaurants({query: '', page: ''})
    } catch(err) {
        yield put({type: types.DEL_REST_FAILED, err})
    }
}


export function* restSaga() {
    yield all([
        yield takeLatest(types.GET_RESTS, getRestaurants),
        yield takeLatest(types.ADD_REST, addRestaurant),
        yield takeLatest(types.DEL_REST, deleteRestaurant)
        ])
}