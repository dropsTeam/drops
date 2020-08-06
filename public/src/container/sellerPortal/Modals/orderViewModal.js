import React from 'react';

import { Drawer } from 'antd';
import OrderViews from '../../../components/OrdersViews/OrderViews';
import { mainHttp } from '../../../Axios/Axios';

class OrderViewModal extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.fetch();
    }

    async fetch() {
        try {
            const orders = await mainHttp.get('/orders/sellerOrders/0');
            this.setState({
                ...this.state,
                orders: [...orders.data]
            });

        } catch (err) {
            alert('Error Occured loading the orders');
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
            </Drawer>
        )
    }
}

export default OrderViewModal;