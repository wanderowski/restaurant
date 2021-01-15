import React from 'react'
import {Link} from 'react-router-dom'

function NavItem({title, altname}) {
    return (
        <li className="header__navitem">
            <Link to={altname}>{title}</Link>
        </li>
    )
}

export default NavItem