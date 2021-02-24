import {combineReducers} from 'redux'
import authReducer from './authReducer'
import kitchenReducer from './kitchenReducer'
import restReducer from './restReducer'
import revReducer from './revReducer'
import favReducer from './favReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    authReducer,
    kitchenReducer,
    restReducer,
    revReducer,
    favReducer,
    orderReducer
})