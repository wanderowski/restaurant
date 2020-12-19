import * as types from '../actions/types'

const initialState = {
    isLoading: false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.SIGN_UP: 
            return {...state, isLoading: true}
        case types.SIGN_UP_SUCCESS: 
            return {...state, isLoading: false}
        case types.SIGN_UP_FAILED: 
            return {...state, isLoading: false}
        default: 
            return {state}
    }
}