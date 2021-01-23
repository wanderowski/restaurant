import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    reviews: [],
    review: {},
    error: ''
    
}

export default function revReducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_REV: 
            return {...state, isLoading: true}
        case types.ADD_REV_SUCCESS: 
            return {...state, isLoading: false, addResponse: 'Successfully Added!', review: action.payload}
        case types.ADD_REV_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.DEL_REV: 
            return {...state, isLoading: true}
        case types.DEL_REV_SUCCESS: 
            return {...state, isLoading: false, delResponse: 'Successfully deleted!'}
        case types.DEL_REV_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.GET_REVS: 
            return {...state, isLoading: true}
        case types.GET_REVS_SUCCESS: 
            return {...state, isLoading: false, reviews: action.payload}
        case types.GET_REVS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        
        default: 
            return state
    }
}