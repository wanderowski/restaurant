import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './index.css'
import '../../common.css'

function SignUp(props) {

  const styles = {
    backgroundImage: 'url("/img/background.jpeg")',
	  backgroundSize: 'cover'
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const inputWidth = 150


  const onFinish = (values) => {
    props.authActions.signUp(values);
    props.history.push('/signin')
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    return (
    <div className="signup" style={styles}>
      <div className="container">
        <div className="signup__wrapper">
          <Form className="signup__form"
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="container">
              <div className="form__wrapper">
                <h1 className="signup__header">Регистрация</h1>
                <Form.Item
                  label="Логин"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, придумайте имя пользователя!',
                    },
                  ]}
                >
                  <Input autoComplete="false" style={{width: inputWidth}}/>
                </Form.Item>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, введите электронный адрес!',
                    },
                  ]}
                >
                  <Input autoComplete="false" style={{width: inputWidth}}/>
                </Form.Item>
        
                <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, придумайте пароль!',
                    },
                  ]}
                >
                  <Input.Password autoComplete="false" style={{width: inputWidth}}/>
                </Form.Item>
        
                <Form.Item className="signup__button">
                  <Button type="primary" htmlType="submit" >
                    Submit
                  </Button>
                </Form.Item>
                <Link to='/signin'>Уже зарегистрированы?</Link>
              </div>
            </div>
            
        </Form>
        </div>
      </div>

      
    </div>
    )
  }

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignUp))
