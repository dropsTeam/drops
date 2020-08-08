import React from 'react';
import { Row, Col, Input, Form, Button } from 'antd';

class DropdownForm extends React.PureComponent {


    render() {

        const dropdownMap = this.props.data.options.map((item, index) => {
            return (

                <div key={index} className='row'>
                    <div className='col-9'>
                        <Input className={'my-2'} onChange={(event) => this.props.handler(event, index)} placeholder="Option" value={item} />
                    </div>
                    <div className='col-3 m-auto'>
                        <Button onClick={() => this.props.remove(index)} >Remove</Button>
                    </div>
                </div>
            )
        });

        return (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="edxw"
                        label="Dropdown"
                        rules={[
                            {
                                required: true,
                                message: 'please enter Dropdown',
                            },
                        ]}>
                        <Input className={'my-2'} onChange={(event) => this.props.titleHandler(event)} placeholder="Title" value={this.props.data.title} />

                        {dropdownMap}
                        <Button type="primary" onClick={this.props.add}>+ Add</Button>
                    </Form.Item>
                </Col>
            </Row>
        );
    }

}

export default DropdownForm;
