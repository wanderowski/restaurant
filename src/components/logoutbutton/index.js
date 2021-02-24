import React from 'react'
import {Button} from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'

function LogoutButton(props) {

    const logoutHandler = () => {
        props.authActions.logOut()
    }
    return(
        <Button type="text" ghost onClick={logoutHandler} danger>
            Выйти
        </Button>
    )
}

const mapStateToProps = state => ({
    isLoading: state.authReducer.isLoading
  })
  
  const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LogoutButton))