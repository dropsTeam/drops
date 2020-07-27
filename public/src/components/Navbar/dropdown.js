import React, { Component } from 'react';
import { Menu, Dropdown,Button,Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const DropDown = () =>  {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              Edit Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              SignUp as Seller
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              potty
            </a>
          </Menu.Item>
          <Menu.Item danger>Logout</Menu.Item>
        </Menu>
      );
    return (
        <Dropdown  classname="modified-dropdown" overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />}></Avatar>
            </a>
        </Dropdown>  
    );
};

export default DropDown;