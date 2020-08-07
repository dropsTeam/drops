import React from 'react';
import { Modal } from 'antd';
import OrderViews from '../OrdersViews/OrderViews';
import { mainHttp } from '../../Axios/Axios';

class OrderViewModal extends React.PureComponent {

    state = {
        orders: []
    }

    fetch = async () => {
        try {

            const orders = await mainHttp.get(`/orders/userOrders/${this.state.page}`);
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

    render() {
        return (
            <Modal
                title="Your Orders"
                visible={this.props.isVisible}
                onOk={() => this.props.$toggleModal(false)}
                onCancel={() => this.props.$toggleModal(false)}>

                <OrderViews orders={this.state.orders} />

                <div style={{ textAlign: 'center' }}>
                    <button className='btn btn-sm btn-primary' onClick={this.fetch}> Load More </button>
                </div>

            </Modal>
        )
    }

}

export default OrderViewModal;
