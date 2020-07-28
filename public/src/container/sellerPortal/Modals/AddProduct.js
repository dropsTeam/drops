import React from 'react';

import KeyValueForm from './DynamicForms/keyValue.Form';
import Highlights from './DynamicForms/Highlights';
import DropdownForm from './DynamicForms/Dropdown.Form';

import { Drawer, Form, Button, Col, Row, Input } from 'antd';



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
            media: ['', '', '', '', ''],
            varients: [{ title: '', media: '' }],
            dropdown: {
                title: '',
                options: ['']
            }
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
    addVarient = () => {
        const newArr = [...this.state.varients];
        newArr.push({ title: '', media: '' });
        this.setState({ ...this.state, varients: [...newArr] });
    }
    removeVarient = (index) => {
        const newArr = [...this.state.varients];
        newArr.splice(index, 1);
        this.setState({ ...this.state, varients: [...newArr] });

    }
    handleVarient = (e, property, index) => {
        const newArr = [...this.state.varients];
        newArr[index][property] = e.target.value;
        this.setState({ ...this.state, varients: [...newArr] });
    }


    handleTitle = (e) => {
        const newState = { ...this.state, ...this.state.dropdown };
        newState.dropdown.title = e.target.value;
        this.setState(newState);
    }
    addDropdownOption = () => {
        const newArr = [ ...this.state.dropdown.options ];
        newArr.push('');
        this.setState({ ...this.state, dropdown: { ...this.state.dropdown, options: [...newArr] } });
    }
    removeOptions = (index) => {
        const newArr = [ ...this.state.dropdown.options ];
        newArr.splice(index, 1);
        this.setState({ ...this.state, dropdown: { ...this.state.dropdown, options: [...newArr] } });
    }
    optionsHandler = (e, index) => {
        const newArr = [ ...this.state.dropdown.options ];
        newArr[index] = e.target.value;
        this.setState({ ...this.state, dropdown: { ...this.state.dropdown, options: [...newArr] } });
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



                    <KeyValueForm
                        data={this.state.details}
                        keyProperty={'key'}
                        valueProperty={'value'}
                        keyPH={'Please add Title'}
                        valuePH={'Please add discription'}
                        add={this.addDetails}
                        title={'Specifications'}
                        remove={this.removeDetails}
                        handler={this.handleDetails} />

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

                    <KeyValueForm
                        data={this.state.varients}
                        keyProperty={'title'}
                        valueProperty={'media'}
                        keyPH={'Please add Title'}
                        valuePH={'Please add image url'}
                        add={this.addVarient}
                        title={'Varients'}
                        remove={this.removeVarient}
                        handler={this.handleVarient} />
                    <hr />

                    <DropdownForm
                        data={this.state.dropdown}
                        add={this.addDropdownOption}
                        titleHandler={this.handleTitle}
                        handler={this.optionsHandler}
                        remove={this.removeOptions} />



                </Form>
            </Drawer>

        )
    }
}

export default AddProduct;
