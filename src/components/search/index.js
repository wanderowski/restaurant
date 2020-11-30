import React from 'react'
import loupe from '../../img/widgets/loupe.png'

function Search() {
    return (
        <div className="search">
            <div className="search__wrapper">
                <input type="text" className="search__input" placeholder="Search..."/>
                <img src={loupe} alt="search" className="search__logo"/>
            </div>
        </div>
    )
}

export default Search