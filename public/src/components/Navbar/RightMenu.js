import React, { Component } from 'react';
import { Menu, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import DropDown from '../Navbar/dropdown';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class RightMenu extends Component {


  render() {

    return (
      <Menu mode="horizontal" className="rightymenu">
        <Button className="logbtn">
          Login
        </Button>
        <DropDown />
        <Menu.Item style={{ position: "relative", right: 25 }} key="1">
          <NavLink to='/cart' style={{color: 'white'}}>
            <Badge count={this.props.cartItems.length} style={{ position: "absolute", top: 8, right: 10, fontSize: 12, }}><ShoppingCartOutlined style={{ fontSize: 28, top: 7, position: "relative" }} /></Badge>Cart
          </NavLink>
        </Menu.Item>
      </Menu>

    );
  }

}

const mapPropsToState = store => {
  return {
    cartItems: store.cartItems
  }
}

export default connect(mapPropsToState, null)(RightMenu);