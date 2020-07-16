import React, { Component } from 'react';
import { Menu,Button,Dropdown, Badge} from 'antd';
import { DownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import DropDown from '../Navbar/dropdown';







class RightMenu extends Component {
  render() {
    
    return (      
      <Menu mode="horizontal" className="rightymenu">
        <Button className="logbtn">
        Login 
        </Button>
        <DropDown />
        <Menu.Item style={{ position: "relative", right:25}} key="1"><Badge  count={5} style={{position:"absolute",top:8,right:10, fontSize:12,}}><ShoppingCartOutlined style={{ fontSize: 28, top:7, position: "relative"}}/></Badge>Cart</Menu.Item>
      </Menu>

    );
  }
}

export default RightMenu;