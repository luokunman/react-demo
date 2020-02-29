import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import { getCookie } from '../../utils/cookie';
import './Admin.less'
import LeftNav from '../../components/leftNav/LeftNav';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';

const { Header, Content, Footer } = Layout;

export default class Admin extends Component {
  componentWillMount() {
    let userInfo = getCookie('userInfo');
    if(!userInfo) {
      return (
        <BrowserRouter>
          <Switch>
            <Redirect to='/login'></Redirect>
          </Switch>
        </BrowserRouter>
      )
    }
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNav></LeftNav>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <BreadCrumb></BreadCrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
/**
 * 
 * @para
 */

// ReactDOM.render(<Admin />, mountNode);
