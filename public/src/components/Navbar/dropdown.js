import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as authActions from '../../Redux/Actions/AuthActions';

import OrderViewModal from '../OrderViewModal/OrderViewModal';
import EditProfileModal from '../editProfileModal/editProfileModal';

import { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { mainHttp } from '../../Axios/Axios';
import { withRouter } from 'react-router-dom';


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a Seller Account"
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
          ]}>

          <Input />
        </Form.Item>
        <Form.Item name="bio" label="Bio (Optional) ">
          <Input.TextArea row={3} />
        </Form.Item>
        <Form.Item name="profileImg" label="Profile Image URL ( Optional )">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = async values => {

    try {
      if (values.bio === undefined) { values.bio = '' }
      if (values.profileImg === undefined) { values.profileImg = '' }
      console.log(values);
      const seller = await mainHttp.post('/user/seller', { ...values });
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
class DropDown extends React.PureComponent {

  state = {
    view: {
      ordersModal: false,
      editProfile: false
    },
  }

  signUpAsSeller = (sellerInfo) => {
    console.log(sellerInfo);
    this.props.setSeller(sellerInfo);
  }

  toggleModal = (modalName, isVisible) => {

    const newState = {
      ...this.state,
      view: {
        ...this.state.view,
      }
    };

    newState.view[modalName] = isVisible;
    this.setState({ ...newState });
  }


  render() {
    const menu = (

      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={() => this.toggleModal('editProfile', true)}>
            Edit Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          {
            (this.props.user.isSeller) ? (
              <a rel="noopener noreferrer" onClick={() => this.props.history.push('/s/seller')} >
                Seller Account
              </a>
            ) :
              (
                <CollectionsPage signUpAsSeller={this.signUpAsSeller} />
              )
          }
        </Menu.Item>

        <Menu.Item danger onClick={this.props.$logout}>Logout</Menu.Item>
      </Menu>
    );

    return (
      this.props.isAuthorised && (
        <React.Fragment>

          <button className='btn btn-sm btn-primary mr-5'
            onClick={() => this.toggleModal('ordersModal', true)}>
            Orders
          </button>

          <Dropdown classname="modified-dropdown" overlay={menu} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar size="large" src={this.props.user.profilePic} icon={<UserOutlined />}></Avatar>
            </a>
          </Dropdown>

          <OrderViewModal isVisible={this.state.view.ordersModal} $toggleModal={(a) => this.toggleModal('ordersModal', a)} />
          <EditProfileModal onSave={(data) => this.props.$editProfile(data)} user={this.props.user} isVisible={this.state.view.editProfile} $toggleModal={(a) => this.toggleModal('editProfile',a) } ></EditProfileModal>
        </React.Fragment>
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
    setSeller: (sellerInfo) => dispatch(authActions.setSeller(sellerInfo)),
    $logout: () => dispatch(authActions.logout()),
    $editProfile: (data) => dispatch(authActions.editProfile(data))
  }
}

export default connect(mapPropsToState, mapPropsToDispatch)(withRouter(DropDown));