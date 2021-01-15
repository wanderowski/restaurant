import * as types from './types'

export function addKitchen(data) {
    return {type: types.ADD_KITCHEN, data}
} 

export function getKitchens() {
    return {type: types.GET_KITCHENS}
} 

export function deleteKitchen(data) {
    return {type: types.DEL_KITCHEN, data}
}

export function editKitchen(data) {
    return {type: types.EDIT_KITCHEN, data}
}