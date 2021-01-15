import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
    isLoading: false,
    isAuth: false,
    user: {},
    error: ''
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.SIGN_UP: 
            return {...state, isLoading: true}
        case types.SIGN_UP_SUCCESS: 
            return {...state, isLoading: false}
        case types.SIGN_UP_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.SIGN_IN: 
            return {...state, isLoading: true}
        case types.SET_CURRENT_USER:
            return {...state, isLoading: false, isAuth: !isEmpty(action.payload), user: action.payload}
        case types.SIGN_IN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.LOG_OUT: 
            return {...state, isLoading: true}
        case types.LOG_OUT_SUCCESS: 
            return {...state, isLoading: false, isAuth: false, user: {}}
        case types.LOG_OUT_FAILED: 
            return {...state, isLoading: false, isAuth: !isEmpty(action.payload), user: action.payload}
        default: 
            return state
    }
}