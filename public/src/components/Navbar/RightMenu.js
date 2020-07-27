import React, { Component } from 'react';
import { Menu, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import DropDown from '../Navbar/dropdown';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GoogleBtn from '../../container/GoogleBtn/GoogleBtn.js';



import { Modal } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <p type="primary" onClick={this.showModal}>
          Login
        </p>
        <Modal
          
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Login here to start your business as a seller</p>
          <GoogleBtn visible={true} />
        </Modal>
      </>
    );
  }
}




// login button and cart button
class RightMenu extends Component {

  render() {

    return (
      <Menu mode="horizontal" className="rightymenu">
        {
          (!this.props.isAuthorised) && (
            <Button className="logbtn">
              <App />
            </Button>

          )
        }

        <DropDown />
        <Menu.Item style={{ position: "relative", right: 25 ,top: '-4px' }} key="1">
          <NavLink to='/cart' style={{ color: 'white' ,textDecoration : "none"}}>
            <Badge count={this.props.cartItems.length} style={{ position: "absolute", top: '7px', right: 10, fontSize: 12, }}><ShoppingCartOutlined style={{ fontSize: 28, top: 7, position: "relative" }} /></Badge>
          </NavLink>
        </Menu.Item>
      </Menu>

    );
  }

}

const mapPropsToState = store => {
  return {
    cartItems: store.cartItems,
    isAuthorised: store.isAuthorised
  }
}

export default connect(mapPropsToState, null)(RightMenu);