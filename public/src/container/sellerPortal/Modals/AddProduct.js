import React from 'react';
import { Modal } from 'antd';



class AddProduct extends React.PureComponent {

    render() {
        return (
            <Modal
                title="Basic Modal"
                visible={this.props.isVisible}
                onOk={this.props.addProduct}
                onCancel={() => this.props.$toggleModal('AddProduct', false)}>
                <h1>Add AddProduct</h1>
            </Modal>

        )
    }
}

export default AddProduct;
