import React from 'react';

import { Drawer } from 'antd';
import OrderViews from '../../../components/OrdersViews/OrderViews';

class OrderViewModal extends React.PureComponent {


    componentDidMount() {
        fetch();
    }
    
    async fetch() {
        try {

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
                <OrderViews />
            </Drawer>
        )
    }
}

export default OrderViewModal;