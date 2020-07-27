import React from 'react';

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

class AddProduct extends React.PureComponent {

    render() {


        return (
            <Drawer
                
                title="Create a new account"
                width={720}
                onClose={() => this.props.$toggleModal('AddProduct', false)}
                visible={this.props.isVisible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={() => this.props.$toggleModal('AddProduct', false)} style={{ marginRight: 8 }}>
                            Cancel
              </Button>
                        <Button onClick={() => this.props.$toggleModal('AddProduct', false)} type="primary">
                            Submit
              </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Title"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter the product title" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="url"
                                label="Highlights"
                                rules={[{ required: true, message: 'Please enter url' }]}
                            >
                                <Input
                                    style={{ width: '100%' }}
                                    addonBefore="http://"
                                    addonAfter=".com"
                                    placeholder="Please enter url"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Owner"
                                rules={[{ required: true, message: 'Please select an owner' }]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[{ required: true, message: 'Please choose the type' }]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="private">Private</Option>
                                    <Option value="public">Public</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Approver"
                                rules={[{ required: true, message: 'Please choose the approver' }]}
                            >
                                <Select placeholder="Please choose the approver">
                                    <Option value="jack">Jack Ma</Option>
                                    <Option value="tom">Tom Liu</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="DateTime"
                                rules={[{ required: true, message: 'Please choose the dateTime' }]}
                            >
                                <DatePicker.RangePicker
                                    style={{ width: '100%' }}
                                    getPopupContainer={trigger => trigger.parentElement}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row>
                    .
                </Form>
            </Drawer>

        )
    }
}

export default AddProduct;
