import React from 'react';
import { Input, Row, Col, Button } from 'antd';

class VarientForm extends React.PureComponent {


    render() {

        const mapedForm = this.props.varient.map((item, index) => {
            return (
                <Row gutter={16} key={index}>
                    <Col span={10}>
                        <Input placeholder="Title" required={true} onChange={(event) => this.props.handleDetails(event, 'key', index)} value={item.key} required={true} />
                    </Col>
                    <Col span={10}>
                        <Input placeholder="Value" required={true} onChange={(event) => this.props.handleDetails(event, 'value', index)} value={item.value} required={true} />
                    </Col>
                    <Col span={4}> <Button type='primary' onClick={() => this.props.removeDetails(index)}>Remove</Button> </Col>
                </Row>
            );
        });

        return (
            <React.Fragment>
                <Row gutter={16} > <Col span={24}><h6 style={{ fontWeight: 500 }}>Specifications</h6> </Col> </Row>
                <Row gutter={16} > <Col span={24}><h6>.</h6> </Col> </Row>

                {mapedForm}

                <Button onClick={this.props.addDetails} style={{ margin: '10px 0' }} type='primary'>+ Add </Button>
            </React.Fragment>
        );
    }


};

export default DetailsForm;

