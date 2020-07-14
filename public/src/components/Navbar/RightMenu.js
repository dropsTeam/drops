import React, { Component } from 'react';
import { Menu,Button,Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';




class RightMenu extends Component {
  render() {
    
    return (      
      <Menu mode="horizontal" className="rightymenu">
        <Button className="logbtn">
        Login 
        </Button>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              More
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          3rd menu item（disabled）
        </Menu.Item>        
      </Menu>

    );
  }
}

export default RightMenu;