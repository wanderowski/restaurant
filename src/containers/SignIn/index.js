import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'
import './index.css'
import '../../common.css'

function SignIn(props) {

  const inputWidth = 200;

  const styles = {
    backgroundImage: 'url("/img/background.jpeg")',
	  backgroundSize: 'cover'
  }


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const onFinish = values => {
    props.authActions.signIn(values);
  
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    return (
      <div className="signin" style={styles}>
        <div className="container">
          <div className="signin__wrapper">
            
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="signin__form"
            >
            <div className="container">
              <div className="form__wrapper">
                <h2 className="signin__header">Вход</h2>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: false,
                      message: 'Пожалуйста, укажите ваш E-mail!',
                    },
                  ]}
                  className="form__item"
                >
                  <Input style={{width: inputWidth}}/>
                </Form.Item>
          
                <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[
                    {
                      required: false,
                      message: 'Пожалуйста, введите пароль!',
                    },
                  ]}
                  className="form__item"
                >
                  <Input.Password style={{width: inputWidth}}/>
                </Form.Item>
          
                <Form.Item className="form__item">
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
    )
  }

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignIn))
