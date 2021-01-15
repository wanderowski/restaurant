import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    kitchens: [],
    error: '',
    kitchenResponse: '',
    deleteResponse: ''
}

export default function kitchenReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_KITCHENS: 
            return {...state, isLoading: true}
        case types.GET_KITCHENS_SUCCESS: 
            return {...state, isLoading: false, kitchens: action.payload}
        case types.GET_KITCHENS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_KITCHEN: 
            return {...state, isLoading: true}
        case types.ADD_KITCHEN_SUCCESS:
            return {...state, isLoading: false, kitchenResponse: 'Successfully added'}
        case types.ADD_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.DEL_KITCHEN:
            return {...state, isLoading: true}
        case types.DEL_KITCHEN_SUCCESS: 
            return {...state, isLoading: false, deleteResponse: 'Successfully deleted'}
        case types.DEL_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.EDIT_KITCHEN: 
            return {...state, isLoading: true}
        case types.EDIT_KITCHEN_SUCCESS:
            return {...state, isLoading: false, editResponse: action.payload}
        case types.EDIT_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}