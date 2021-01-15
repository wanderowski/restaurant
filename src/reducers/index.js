import {combineReducers} from 'redux'
import authReducer from './authReducer'
import kitchenReducer from './kitchenReducer'
import restReducer from './restReducer'

export default combineReducers({
    authReducer,
    kitchenReducer,
    restReducer
})