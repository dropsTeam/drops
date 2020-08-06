import React from 'react';
import { Steps, Card, Divider } from 'antd';
import { HeartTwoTone, SendOutlined, ShoppingOutlined, CheckCircleTwoTone } from '@ant-design/icons';


class OrederView extends React.PureComponent {

    componentDidMount() {
        const date1 = new Date(this.props.order.timeStamp).getDate();
        alert(date1)
    }

    render() {
        return (
            <Card style={{ padding: '6px 0', margin: '15px 0' }}>
                <Steps current={0} >
                    <Steps.Step title="Order Placed" description="Placed Order" icon={<HeartTwoTone twoToneColor="#eb2f96" />} />
                    <Steps.Step title="Shipping" description="Shipping" icon={<SendOutlined />} />
                    <Steps.Step title="Out for Delivery" description="Out for Delivery" icon={<ShoppingOutlined />} />
                    <Steps.Step title="Arived" description="Arived" icon={<CheckCircleTwoTone />} />
                </Steps>

                <Divider />

                <div>
                    <div className='row'>
                        <div className='col-2'>
                            <img className='img-fluid' style={{ height: 'auto', maxWidth: '100%' }} src={this.props.order.media} />
                        </div>
                        <div>
                            <strong>{this.props.order.title}</strong>
                            <p className='mt-3'>
                                <a class="badge badge-primary" style={{color: 'white'}}>
                                    {this.props.order.dropdown.title + ' : ' + this.props.order.dropdown.options}
                                </a>
                                
                                <a class="badge badge-light ml-3" style={{color: 'black'}}>
                                    {this.props.order.varients.title}
                                </a>
                            </p>
                            <strong>${this.props.order.price }  &#x2715;  { this.props.order.quantity}</strong>
                        </div>
                    </div>
                    <div className='float-right'>
                        By <strong>{this.props.order.fullName}</strong> on  <strong>{this.props.order.timeStamp}</strong>
                    </div>
                </div>

            </Card>
        )
    }
}

export default OrederView;
