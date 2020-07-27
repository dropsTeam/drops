import React from 'react';

import { Modal } from 'antd';

class EditSellerProfile extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {



        return (
            <Modal
                title="Basic Modal"
                visible={this.props.isVisible}
                onOk={() => { }}
                onCancel={() => this.props.$toggleModal('EditSellerProfile', false)}>

            </Modal>
        )
    }
}

export default EditSellerProfile;
