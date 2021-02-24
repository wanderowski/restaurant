import React from 'react'
import { Button } from 'antd'


function FavButton() {

    const openFavs = () => {
        window.location.href="/favorites"
    }
    return(
        <Button type="text" ghost onClick={openFavs}>
            Избранное
        </Button>
    )
}


export default FavButton