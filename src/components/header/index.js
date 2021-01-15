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

const { Search } = Input;



function Header(props) {
    const {headerItems, onSearch} = props
    
    const navItems = headerItems.map((item, i) =>
        <NavItem key={i} title={item.title} altname={item.altname} />
    )
    const authButton = <Button ghost>
                            <Link to='/signup'>Register or Login</Link>
                        </Button>
    const logoutButton = <LogoutButton />
    
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