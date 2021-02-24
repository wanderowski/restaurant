import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    order: {},
    orders: [],
    error: ''
    
}

export default function orderReducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_ORDER: 
            return {...state, isLoading: true}
        case types.ADD_ORDER_SUCCESS: 
            return {...state, isLoading: false, order: action.payload}
        case types.ADD_ORDER_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.GET_ORDERS: 
            return {...state, isLoading: true}
        case types.GET_ORDERS_SUCCESS: 
            return {...state, isLoading: false, orders: action.payload}
        case types.GET_ORDERS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}