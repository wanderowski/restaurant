import React from 'react'

function NavItem({title}) {
    return (
        <li className="header__navitem">
            <a href="#">{title}</a>
        </li>
    )
}

export default NavItem