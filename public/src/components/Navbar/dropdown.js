import React, { Component } from 'react';
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropDown = () =>  {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );
    return (
        <Dropdown  classname="modified-dropdown" overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            More  <DownOutlined />
            </a>
        </Dropdown>  
    );
};

export default DropDown;