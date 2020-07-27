import React, { Component } from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

class DropDown extends Component {

  render() {
    const menu = (

      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Edit Profile
            </a>
        </Menu.Item>
        <Menu.Item>
          {
            (this.props.user.isSeller) ? (
              <a target="_blank" rel="noopener noreferrer" >
                Seller Account
              </a>
            ) :
              (
                <a target="_blank" rel="noopener noreferrer" >
                  Become a Seller
                </a>
              )
          }
        </Menu.Item>

        <Menu.Item danger>Logout</Menu.Item>
      </Menu>
    );

    return (
      this.props.isAuthorised && (
        <Dropdown classname="modified-dropdown" overlay={menu} >
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />}></Avatar>
          </a>
        </Dropdown>
      )
    );
  }
};

const mapPropsToState = (store) => {
  return {
    isAuthorised: store.isAuthorised,
    user: store.user
  }
}

export default connect(mapPropsToState, null)(DropDown);