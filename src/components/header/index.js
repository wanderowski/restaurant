import React from 'react'
import NavItem from '../navitem'
import './header.css'
import '../../common.css'
import { Button, Input } from 'antd'
import {Link} from 'react-router-dom'
import DashboardButton from '../dashboardButton'
import AvatarMenu from '../avatarMenu'
import isAdmin from '../../validation/isAdmin'

const { Search } = Input;



function Header() {

    function onSearch (query) {
        window.location.href = `/search?query=${query}`
    }

    const headerItems= [
        {title: 'Рестораны', altname: '/#restaurants'},
        {title: 'Популярные', altname: 'popular'},  
        {title: 'Контакты', altname: 'contacts'}
    ]
    

    const navItems = headerItems.map((item, i) =>
        <NavItem key={i} title={item.title} altname={item.altname} />
    )

    const authButton = <Button ghost>
                            <Link to='/signup'>Register or Login</Link>
                        </Button>

    const dashboardButton = <DashboardButton />
    
    return(
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to='/'>
                        <img className="header__logo" src='./img/image2.png' alt="logo"/>
                    </Link>
                    <div className="header__nav">
                        <ul className="header__navlist">
                            {navItems}
                        </ul>
                        <Search enterButton placeholder="Введите название ресторана" onSearch={onSearch} style={{ width: 300, backgroundColor: 'transparent' }}/>
                        {localStorage['token'] ? <AvatarMenu /> : authButton}
                        {isAdmin(localStorage['role']) ? dashboardButton : null}
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

    export default Header