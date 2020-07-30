import React, { Component } from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as authActions from '../../Redux/Actions/AuthActions';

import { useState } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { mainHttp } from '../../Axios/Axios';


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="Company Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of your company!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="bio" label="Bio">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="profileImg" label="Profile Image URL">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = async values => {

    try {
      const seller = await mainHttp.post('/user/seller', { ...values });
      console.log(values);
      props.signUpAsSeller({ isSeller: true, seller: { ...values } });
    } catch (err) {
      console.log(err);
      alert('oops Error occured signing up a seller');
    }
    finally {
      setVisible(false);
    }

  };

  return (
    <div>
      <a
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Become a seller
      </a>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};


// dropdown at nanbar----------------------
class DropDown extends Component {

  signUpAsSeller = (sellerInfo) => {
    console.log(sellerInfo);
    this.props.setSeller(sellerInfo);
  }

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
              <a rel="noopener noreferrer" >
                Seller Account
              </a>
            ) :
              (
                <CollectionsPage signUpAsSeller={this.signUpAsSeller} />
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
            <Avatar size="large" src={this.props.user.profilePic} icon={<UserOutlined />}></Avatar>
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

const mapPropsToDispatch = dispatch => {
  return {
    setSeller: (sellerInfo) => dispatch(authActions.setSeller(sellerInfo))
  }
}

export default connect(mapPropsToState, mapPropsToDispatch)(DropDown);