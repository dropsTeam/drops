import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography,Select,Space } from 'antd';
import { SmileOutlined, UserOutlined, MinusCircleOutlined} from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const { Option } = Select;


  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );


  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="DELIVERY ADDRESS" visible={visible} onOk={onOk} onCancel={onCancel} headStyle={{ color:'grey', height:48}}>
      <Form form={form} layout="vertical" name="userForm">
            <Space  style={{ display: 'flex', marginBottom: 8 }} align="start">
                <Form.Item name="FirstName" label="First Name" rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="LastName" label="Last Name" >
                    <Input />
                </Form.Item>
                
            </Space>
            <Form.Item name="Phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                    <Input addonBefore={prefixSelector} style={{ width: '80%' }} />
            </Form.Item>
            <Form.Item name="Address" label="Address" rules={[{required: true}]}>
                <Input />
            </Form.Item>
            <Space  style={{ display: 'flex', marginBottom: 8 }} align="start">
                <Form.Item name="City" label="City" rules={[ { required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="State" label="State" rules={[{required: true,},]}>
                    <Input />
                </Form.Item> 
                <Form.Item name="ZipCode" label="Zip Code" rules={[   {     required: true,   }, ]}>
                    <Input />
                </Form.Item>
            </Space>
            <Form.Item name="Landmark" label="Landmark" rules={[   {     required: true,   }, ]}>
                <Input />
            </Form.Item>
        </Form>
    </Modal>
  );
};

const DeliverForm = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({
              users: [...users, values],
            });
            setVisible(false);
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={onFinish}>
        
          <Form.Item
            label="Delivery Address"
            shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
          >
            {({getFieldValue}) => {
              const users = getFieldValue('users') || [];
              return users.length ? (
                <ul>
                  {users.map((user, index) => (
                    <li key={index} className="user">
                      
                      {user.FirstName} - {user.LastName} - {user.Phone} - {user.Address} - {user.City} - {user.State} - {user.ZipCode} -- {user.Landmark} 
                    </li>
                    
                    
                  ))}
                </ul>
              ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( No address yet. )
                </Typography.Text>
              );
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: '0 8px',
              }}
              onClick={showUserModal}
            >
              Add New Address
            </Button>
          </Form.Item>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default (DeliverForm);