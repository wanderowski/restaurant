import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authActions'
import {withRouter} from 'react-router-dom'

function SignIn(props) {


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    console.log('Success:', values);
    props.authActions.signIn(values);
    props.history.push('/profile')
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: false,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: false,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    )
  }

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignIn))