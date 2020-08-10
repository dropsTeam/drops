import React from 'react';

import { Form, Input, Modal } from 'antd';

class EditProfileModal extends React.PureComponent {

    state = {
        _id: 0,
        address: '',
        city: '',
        state: '',
        zipCode: '',
        landmark: '',
        phoneNumber: 0
    }

    componentWillUpdate(prevProps, prevState, snapshot) {
        if (this.state._id === 0 && !!this.props.user) {
            this.setState({
                _id: this.props.user._gId,
                address: this.props.user.userAddress.address,
                city: this.props.user.userAddress.city,
                zipCode: this.props.user.userAddress.zipCode,
                state: this.props.user.userAddress.state,
                landmark: this.props.user.userAddress.landmark,
                phoneNumber: this.props.user.phoneNumber
            });
        }
    }

    handleChange = (event, fieldName) => {
        try {
            this.setState({
                ...this.state,
                [fieldName]: event.target.value
            });

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (

            <Modal
                title="Edit Profile Details"
                visible={this.props.isVisible}
                onOk={() => { this.props.onSave({ ...this.state }); this.props.$toggleModal(false) }}
                onCancel={() => this.props.$toggleModal(false)}
            >
                <Form>
                    <Form.Item label='Full Name'>
                        <Input placeholder='Full Name' disabled={true} value={this.props.fullName} />
                    </Form.Item>
                    <Form.Item label='Email'>
                        <Input placeholder='Email' disabled={true} value={this.props.email} />
                    </Form.Item>
                    <Form.Item label='Address'>
                        <Input placeholder='Address' disabled={false} value={this.state.address} onChange={(e) => this.handleChange(e, 'address')} />
                    </Form.Item>

                    <Input.Group>
                        <Form.Item label='Province'>
                            <Input placeholder='Province' disabled={false} value={this.state.state} onChange={(e) => this.handleChange(e, 'state')} />
                        </Form.Item>
                        <Form.Item label='City'>
                            <Input placeholder='City' disabled={false} value={this.state.city} onChange={(e) => this.handleChange(e, 'city')} />
                        </Form.Item>
                    </Input.Group>

                    <Form.Item label='Landmark'>
                        <Input placeholder='Landmark' disabled={false} value={this.state.landmark} onChange={(e) => this.handleChange(e, 'landmark')} />
                    </Form.Item>
                    <Form.Item label='Phone No.'>
                        <Input type='number' placeholder='Phone No.' disabled={false} value={this.state.phoneNumber} onChange={(e) => this.handleChange(e, 'phoneNumber')} />
                    </Form.Item>

                </Form>

            </Modal>


        )
    }

}

export default EditProfileModal;
