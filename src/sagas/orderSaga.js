import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'
import { message } from 'antd'



function* addOrder(action) {
    const { data } = action
    console.log(`Some Data:`)
    console.log(data)
    try {
        const order = yield axios.post('http://37.18.30.124:9000/api/order', data).then(res => res.data)
        yield put({type: types.ADD_ORDER_SUCCESS, payload: order})
        message.success('Успешно добавлен!')
    } catch(err) {
        if(isEmpty(localStorage['token'])) {
            message.error('Вы не авторизованы. Зарегистрируйтесь или авторизуйтесь.')
        }
        yield put({type: types.ADD_ORDER_FAILED, err})
    }
}

function* getOrders() {
    try {
        const orders = yield axios.get('http://37.18.30.124:9000/api/order').then(res => res.data)
        yield put({type: types.GET_ORDERS_SUCCESS, payload: orders})
    } catch(err) {
        if(isEmpty(localStorage['token'])) {
            message.error('Вы не авторизованы. Зарегистрируйтесь или авторизуйтесь.')
        }
        yield put({type: types.GET_ORDERS_FAILED, err})
    }
}


export function* orderSaga() {
    yield all([
        yield takeLatest(types.ADD_ORDER, addOrder),
        yield takeLatest(types.GET_ORDERS, getOrders)
        ])
}