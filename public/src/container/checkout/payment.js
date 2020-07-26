import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Modal, Button, DatePicker, Typography} from 'antd';


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

function onChange(date, dateString) {
    console.log(date, dateString);
  }

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



  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="PAYMENT METHOD" visible={visible} onOk={onOk} onCancel={onCancel} headStyle={{ color:'grey', height:35}}>
      <Form form={form} layout="vertical" name="userPayment" >
                <Form.Item  name="FirstName" label="Name On Card" rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="CardNo" label="Card Number" rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item   name="Expiry"  label="Expiration Date" rules={[{required: true}]} >
                    <DatePicker picker="month" />
                </Form.Item>
        </Form>
    </Modal>
  );
};

const PaymentForm = () => {
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
          if (name === 'userPayment') {
            const { basicForm } = forms;
            const Users = basicForm.getFieldValue('Users') || [];
            basicForm.setFieldsValue({
              Users: [...Users, values],
            });
            setVisible(false);
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={onFinish}>
        
          <Form.Item
            label="Card Details"
            shouldUpdate={(prevValues, curValues) => prevValues.Users !== curValues.Users}
          >
            {({getFieldValue}) => {
              const Users = getFieldValue('Users') || [];
              return Users.length ? (
                <ul>
                  {Users.map((user, index) => (
                    <li key={index} className="user">
                      {user.FirstName} - {user.CardNo}  
                    </li>
                    
                    
                  ))}
                </ul>
              ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( No Details Yet )
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
              Add Card
            </Button>
          </Form.Item>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default (PaymentForm);
