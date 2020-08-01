import React from 'react';

import { Modal } from 'antd';
import OrderViews from '../../../components/OrdersViews/OrderViews';

class orderViewModal extends React.PureComponent {

    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {

        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <OrderViews />
            </Modal>
        )
    }
}

export default orderViewModal;