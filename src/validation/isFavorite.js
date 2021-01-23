const isFavorite = (name,favs) => {
    if(favs.filter(item => item.Restaurant.name === name).length) {
        return true
    }
    else {
        return false
    }
}
export default isFavorite