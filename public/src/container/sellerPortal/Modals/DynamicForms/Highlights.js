import React from 'react';
import { Row, Col, Input, Form, Button } from 'antd';

class Highlights extends React.PureComponent {

    render() {

        const HLs = this.props.highlights.map((item, index) => {
            return (

                <div key={index} className='row'>
                    <div className='col-9'>
                        <Input className={'my-2'} onChange={(event) => this.props.HLsHandler(event, index)} placeholder="Heighlight" key={index} value={item} />
                    </div>
                    <div className='col-3 m-auto'>
                        <Button onClick={() => this.props.removeHLs(index)} >Remove</Button>
                    </div>
                </div>
            )
        });

        return (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="higsights"
                        label="Highlights"
                        rules={[
                            {
                                required: true,
                                message: 'please enter highlights',
                            },
                        ]}>
                        {HLs}
                        <Button type="primary" onClick={this.props.addHLs}>+ Add</Button>
                    </Form.Item>
                </Col>
            </Row>
        )
    }
}

export default Highlights;
