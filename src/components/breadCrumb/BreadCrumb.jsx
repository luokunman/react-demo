import React, { Component } from 'react'
import { Breadcrumb } from 'antd';

export default class BreadCrumb extends Component {
  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>用户</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
