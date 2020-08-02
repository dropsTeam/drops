import React from 'react';
import { Steps, Card, Divider } from 'antd';
import { HeartTwoTone, SendOutlined, ShoppingOutlined, CheckCircleTwoTone } from '@ant-design/icons';


class OrederView extends React.PureComponent {

    render() {
        return (
            <Card style={{ padding: '6px 0', margin: '15px 0' }}>
                <Steps current={this.props.current} >
                    <Steps.Step title="Order Placed" description="Placed Order" icon={<HeartTwoTone twoToneColor="#eb2f96" />} />
                    <Steps.Step title="Shipping" description="Shipping" icon={<SendOutlined />} />
                    <Steps.Step title="Out for Delivery" description="Out for Delivery" icon={<ShoppingOutlined />} />
                    <Steps.Step title="Arived" description="Arived" icon={<CheckCircleTwoTone />} />
                </Steps>

                <Divider />

                <div>
                    <div className='row'>
                        <div className='col-2'>
                            <img className='img-fluid' style={{ height: 'auto', maxWidth: '100%' }} src={this.props.media} />
                        </div>
                        <div>
                            <strong>{this.props.title}</strong>
                            <p className='mt-2'>{this.props.description}</p>
                            <strong></strong>
                        </div>
                    </div>
                    <div className='float-right'>
                        By <strong>{this.props.fullName}</strong> on  <strong>{this.props.timeStamp}</strong>
                    </div>
                </div>

            </Card>
        )
    }
}

export default OrederView;
