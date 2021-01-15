import * as types from './types'

export function getRestaurants(data) {
    return {type: types.GET_RESTS, data}
}

export function addRestaurant(data) {
    return {type: types.ADD_REST, data}
}

export function deleteRestaurant(data) {
    return {type: types.DEL_REST, data}
}
