import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    restaurants: [],
    error: '',
    pageSize: '',
    total: '',
    addResponse: '',
    deleteResponse: ''
}

export default function restReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_RESTS: 
            return {...state, isLoading: true}
        case types.GET_RESTS_SUCCESS: 
            return {...state, isLoading: false, restaurants: action.payload.restaurants, pageSize: action.payload.pageSize, total: action.payload.total}
        case types.GET_RESTS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_REST: 
            return {...state, isLoading: true}
        case types.ADD_REST_SUCCESS: 
            return {...state, isLoading: false, addResponse: 'Successfully Added!'}
        case types.ADD_REST_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.DEL_REST: 
            return {...state, isLoading: true}
        case types.DEL_REST_SUCCESS: 
            return {...state, isLoading: false, deleteResponse: 'Successfully deleted'}
        case types.DEL_REST_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}