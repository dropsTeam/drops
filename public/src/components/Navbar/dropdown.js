import React, { Component } from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';



import  { useState } from 'react';
import {  Modal, Form, Input, Radio } from 'antd';

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
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="Company Name"
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
        <Form.Item name="Bio" label="Bio">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="Profile Image" label="Profile Image">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <p
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Become a seller
      </p>
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
                  <CollectionsPage />
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

export default connect(mapPropsToState, null)(DropDown);