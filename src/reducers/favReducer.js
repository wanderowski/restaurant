import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    favorite: {},    
    error: '',
    favorites: []
}

export default function favReducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_FAV: 
            return {...state, isLoading: true}
        case types.ADD_FAV_SUCCESS: 
            return {...state, isLoading: false, addResponse: 'Successfully Added to Favourites!', favorite: action.payload, color: "#eb2f96"}
        case types.ADD_FAV_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.GET_FAVS: 
            return {...state, isLoading: true}
        case types.GET_FAVS_SUCCESS: 
            return {...state, isLoading: false, favorites: action.payload}
        case types.GET_FAVS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}