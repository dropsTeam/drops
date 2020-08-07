import React from 'react';
import { Drawer, message } from 'antd';
import OrderViews from '../OrdersViews/OrderViews';
import { mainHttp } from '../../Axios/Axios';

class OrderViewModal extends React.PureComponent {

    state = {
        orders: [],
        page: 0
    }

    fetch = async () => {
        try {

            const orders = await mainHttp.get(`/orders/userOrders/${this.state.page}`);
            
            if(orders.data.length ===0 ){ message.error('No more Orders!'); return;}
            const newArr = [...this.state.orders].concat(orders.data);

            this.setState((stateSnapshot, propsSnapshot) => {
                return {
                    ...stateSnapshot,
                    orders: [...newArr],
                    page: stateSnapshot.page + 1
                }
            });

        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Drawer
                title="Your Orders"
                placement="right"
                closable={true}
                width={700}
                visible={this.props.isVisible}
                onClose={() => this.props.$toggleModal(false)}>

                <OrderViews orders={this.state.orders} />

                <div style={{ textAlign: 'center' }}>
                    <button className='btn btn-sm btn-primary' onClick={this.fetch}> Load More </button>
                </div>

            </Drawer>
        )
    }

}

export default OrderViewModal;
