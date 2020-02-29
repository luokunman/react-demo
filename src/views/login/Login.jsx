import React, { Component } from 'react'
import { Button, Form, Input, Icon } from 'antd'

import './Login.less'

import { login } from '../../api/login'
import { setCookie, getCookie } from '../../utils/cookie'
class Login extends Component {
  handleSubmit = e => {
      // e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if(!err){  //如果通过了前台校验
            //  this.props.history.push('/admin')
            login(values).then(res => {
              console.log(res)
              if (res.data[0]._id) {
                setCookie('userInfo', JSON.stringify(res.data[0]))
                this.props.history.push({ pathname: '/admin' })
              }
            })
          }
      });
  };
  componentWillMount() {
    var cookieId = getCookie('userInfo')
    if (cookieId) {
      this.props.history.push({ pathname: '/admin' })
      return false
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-form'>
          <h2 className='login-title'>React后台管理系统</h2>
          <Form>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit} style={{width: '100%'}} htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm