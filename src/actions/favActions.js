import * as types from './types'

export function addFavorite(data) {
    return {type: types.ADD_FAV, data}
}

export function getFavorites() {
    return {type: types.GET_FAVS}
}

