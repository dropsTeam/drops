import React from 'react';
import { Steps, Card, Divider } from 'antd';
import { HeartTwoTone, SendOutlined, ShoppingOutlined, CheckCircleTwoTone } from '@ant-design/icons';


class OrederView extends React.PureComponent {

    state = {
        current: 0
    }

    componentDidMount() {
        const date1 = new Date(this.props.order.timeStamp).getTime();
        const date2 = new Date().getTime();

        const result = (date2 - date1) / (100 * 60 * 60 * 24);

        if (result >= 0 && result <= 6) {
            this.setState({ current: 0 })
        }
        else if (result >= 7 && result <= 12) {
            this.setState({ current: 1 })
        }
        else if (result >= 13 && result <= 18) {
            this.setState({ current: 2 })
        }
        else {
            this.setState({ current: 3 })
        }
    }

    render() {
        return (
            <Card style={{ padding: '6px 0', margin: '15px 0' }}>
                <Steps current={this.state.current} >
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
                                <a className="badge badge-primary" style={{ color: 'white' }}>
                                    {this.props.order.dropdown.title + ' : ' + this.props.order.dropdown.options}
                                </a>

                                <a className="badge badge-light ml-3" style={{ color: 'black' }}>
                                    {this.props.order.varients.title}
                                </a>
                            </p>
                            <strong>${this.props.order.price}  &#x2715;  {this.props.order.quantity}</strong>
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
