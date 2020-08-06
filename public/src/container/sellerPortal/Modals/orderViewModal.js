import React from 'react';

import { Drawer, message } from 'antd';
import OrderViews from '../../../components/OrdersViews/OrderViews';
import { mainHttp } from '../../../Axios/Axios';

class OrderViewModal extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            page: 0
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch = async () => {
        try {
            
            const orders = await mainHttp.get(`/orders/sellerOrders/${this.state.page}`);
            
            if(orders.data.length === 0) {
                message.error('No More Orders');
                return;
            }
            this.setState( (stateSnapShot , propsSnapShot) => {
                
                let newArr = stateSnapShot.orders.concat(orders.data);
                return {
                    ...stateSnapShot,
                    orders: [...newArr],
                    page: stateSnapShot.page + 1
                }
                
            });

        } catch (err) {
            console.log(err)
            console.log('Error Occured loading the orders');
        }
    }

    render() {

        return (
            <Drawer
                title="Orders"
                visible={this.props.isVisible}
                width={750}
                closable={true}
                onClose={() => this.props.$toggleModal('orderView', false)}>
                <OrderViews orders={this.state.orders} />
                <div style={{textAlign: 'center'}}>
                    <button onClick={this.fetch} className='btn btn-sm btn-primary' >Load More</button>
                </div>
            </Drawer>
        )
    }
}

export default OrderViewModal;