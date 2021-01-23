import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function NavItem({title, altname}) {
    return (
        <li className="header__navitem">
            {altname === '/#restaurants' ? <HashLink to={altname} smooth="true">{title}</HashLink> : <Link to={altname}>{title}</Link> }
        </li>
    )
}

export default NavItem