import React from 'react';
import { Input, Row, Col, Button } from 'antd';

class KeyValueForm extends React.PureComponent {



    render() {

        const mapedForm = this.props.data.map((item, index) => {
            return (
                <Row gutter={16} key={index} style={{padding: '7px 0'}}>
                    <Col span={10}>
                        <Input placeholder={this.props.keyPH} required={true} onChange={(event) => this.props.handler(event,  this.props.keyProperty, index)} value={item[this.props.keyProperty]} required={true} />
                    </Col>
                    <Col span={10}>
                        <Input placeholder={this.props.valuePH} required={true} onChange={(event) => this.props.handler(event, this.props.valueProperty, index)} value={item[this.props.valueProperty]} required={true} />
                    </Col>
                    <Col span={4}> <Button type='primary' onClick={() => this.props.remove(index)}>Remove</Button> </Col>
                </Row>
            );
        });

        return (
            <React.Fragment>
                <Row gutter={16} > <Col span={24}><h6 style={{ fontWeight: 500 }}>{this.props.title}</h6> </Col> </Row>
                <Row gutter={16} > <Col span={24}><h6> </h6> </Col> </Row>

                {mapedForm}

                <Button onClick={this.props.add} style={{ margin: '10px 0' }} type='primary'>+ Add </Button>
            </React.Fragment>
        );
    }


};

export default KeyValueForm;

