import * as types from './types'

export function addReview(data) {
    return {type: types.ADD_REV, data}
}

export function getReviews() {
    return {type: types.GET_REVS}
}

export function deleteReview(data) {
    return {type: types.DEL_REV, data}
}

