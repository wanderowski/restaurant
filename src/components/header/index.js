import React from 'react'
import NavItem from '../navitem'
import './header.css'
import '../../common.css'
import {Button, Input} from 'antd'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'
import LogoutButton from '../logoutbutton'
import DashboardButton from '../dashboardButton'

import isAdmin from '../../validation/isAdmin'

const { Search } = Input;



function Header(props) {
    const {onSearch} = props
    const headerItems= [
        {title: 'Рестораны', altname: '/#restaurants'},
        {title: 'Популярные', altname: 'popular'}, 
        {title: 'Забронировать', altname: 'book'}, 
        {title: 'Контакты', altname: 'contacts'}
    ]
    
    const navItems = headerItems.map((item, i) =>
        <NavItem key={i} title={item.title} altname={item.altname} />
    )
    const authButton = <Button ghost>
                            <Link to='/signup'>Register or Login</Link>
                        </Button>
    const logoutButton = <LogoutButton />

    const dashboardButton = <DashboardButton />
    
    return(
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to='/'>
                        <img className="header__logo" src='./img/rest_logo_2.png'/>
                    </Link>
                    <div className="header__nav">
                        <ul className="header__navlist">
                            {navItems}
                            <Search placeholder="Введите название ресторана" allowClear onSearch={onSearch} style={{ width: 200 }}/>
                            {localStorage['token'] ? logoutButton : authButton}
                            {isAdmin(localStorage['role']) ? dashboardButton : null}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = state => ({
    isLoading: state.authReducer.isLoading
  })
  
  const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })
  
    export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))