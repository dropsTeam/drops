import React from 'react';

import DetailsForm from './DynamicForms/details.Form';
import Highlights from './DynamicForms/Highlights';
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;


class AddProduct extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            heighlights: [''],
            description: '',
            title: '',
            price: 0,
            category: '',
            details: [{ key: '', value: '' }],
            media: ['', '', '', '', '']
        }

        this.addHLs = this.addHLs.bind(this);
        this.HLsHandler = this.HLsHandler.bind(this);

    }

    addHLs = () => {
        const newArr = [...this.state.heighlights];
        newArr.push('');
        const newState = { ...this.state, heighlights: [...newArr] };
        this.setState(newState);
    }

    removeHLs = (index) => {

        const newArr = [...this.state.heighlights];
        newArr.splice(index, 1);
        const newState = { ...this.state, heighlights: [...newArr] };
        this.setState(newState);
    }

    HLsHandler = (e, index) => {

        const newArr = [...this.state.heighlights];
        newArr[index] = e.target.value;

        const newState = { ...this.state, heighlights: [...newArr] };
        this.setState(newState);
    }

    addDetails = () => {
        const newArr = [...this.state.details];
        newArr.push({ key: '', value: '' });
        this.setState({ ...this.state, details: [...newArr] });
    }
    removeDetails = (index) => {
        const newArr = [...this.state.details];
        newArr.splice(index, 1);
        this.setState({ ...this.state, details: [...newArr] });

    }
    handleDetails = (e, property, index) => {
        const newArr = [...this.state.details];
        newArr[index][property] = e.target.value;
        this.setState({ ...this.state, details: [...newArr] });
    }

    twoWayBind = (e, inputName) => {
        const newState = { ...this.state }
        newState[inputName] = e.target.value;
        this.setState(newState);
    }

    handleMedia = (event, index) => {
        const newArr = [...this.state.media];
        newArr[index] = event.target.value;
        this.setState({ ...this.state, media: [...newArr] });
    }

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
                        }}>
                        <Button onClick={() => this.props.$toggleModal('AddProduct', false)} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={() => this.props.$toggleModal('AddProduct', false)} type="primary">
                            Submit
                        </Button>
                    </div>
                }>
                <Form layout="vertical" hideRequiredMark >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Title"
                                rules={[{ required: true, message: 'Please enter title' }]}>

                                <Input placeholder="Please enter the product title" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="url"
                                label="Price"
                                rules={[{ required: true, message: 'Please enter url' }]}>

                                <Input
                                    style={{ width: '100%' }}
                                    addonBefore="$"
                                    type='number'
                                    placeholder="Price"
                                    min={0}
                                    value={this.state.price}
                                    onChange={(event) => this.twoWayBind(event, 'price')}
                                />
                            </Form.Item>
                        </Col>
                    </Row>




                    <Form.Item
                        name="Category"
                        label="Category"
                        rules={[{ required: true, message: 'Please enter category' }]}>
                        <Input onChange={(e) => this.twoWayBind(e, 'category')} value={this.state.category} placeholder="Please enter product category" />
                    </Form.Item>


                    <DetailsForm details={this.state.details} addDetails={this.addDetails} removeDetails={this.removeDetails} handleDetails={this.handleDetails} />

                    <Col span={24}>
                        <Form.Item
                            name="dwdd"
                            label="Media"
                            rules={[{ required: true, message: 'Please choose all the media ' }]}>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={this.state.media[0]} onChange={(event) => this.handleMedia(event, 0)} placeholder='Media 1' required={true} />
                                </Col>
                                <Col span={12}>
                                    <Input value={this.state.media[1]} onChange={(event) => this.handleMedia(event, 1)} placeholder='Media 2' required={true} />
                                </Col>
                                <Col span={12}>
                                    <Input value={this.state.media[2]} onChange={(event) => this.handleMedia(event, 2)} placeholder='Media 3' required={true} />
                                </Col>
                                <Col span={12}>
                                    <Input value={this.state.media[3]} onChange={(event) => this.handleMedia(event, 3)} placeholder='Media 4' required={true} />
                                </Col>
                                <Col span={12}>
                                    <Input value={this.state.media[4]} onChange={(event) => this.handleMedia(event, 4)} placeholder='Media 5' required={true} />
                                </Col>
                            </Row>

                        </Form.Item>
                    </Col>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter description',
                                    },
                                ]}>
                                <Input.TextArea value={this.state.description} onChange={(event) => this.twoWayBind(event, 'description')} rows={4} placeholder="Please enter description" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <hr />



                    <Highlights highlights={this.state.heighlights} addHLs={this.addHLs} HLsHandler={(e, index) => this.HLsHandler(e, index)} removeHLs={(index) => this.removeHLs(index)} />

                    <hr />


                </Form>
            </Drawer>

        )
    }
}

export default AddProduct;
