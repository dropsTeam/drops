import React from 'react';

import { Modal, Form, Input } from 'antd';

class EditSellerProfile extends React.PureComponent {



    constructor(props) {
        super(props);

        this.state = {
            name: '',
            bio: '',
            profileImg: ''
        }
    }

    componentDidMount() {

        this.setState({
            ...this.state,
            name: this.props.name,
            bio: this.props.bio,
            profileImg: this.props.profileImg
        });



    }

    onChangeHandler(event, field) {
        this.setState({
            ...this.state,
            [field]: event.target.value
        });
    }

    render() {

        return (
            <Modal
                title="Basic Modal"
                visible={this.props.isVisible}
                onOk={() => { this.props.onSave({ ...this.state }); this.props.$toggleModal(false) }}
                onCancel={() => this.props.$toggleModal(false)}>
                <Form>
                    <Form.Item label='Name'>
                        <Input value={this.state.name} onChange={(e) => this.onChangeHandler(e, 'name')} placeholder='Name' />
                    </Form.Item>

                    <Form.Item label='Bio'>
                        <Input.TextArea value={this.state.bio} onChange={(e) => this.onChangeHandler(e, 'bio')} row={4} placeholder='Bio' />
                    </Form.Item>

                    <Form.Item label='Profile Image URL'>
                        <Input value={this.state.profileImg} onChange={(e) => this.onChangeHandler(e, 'profileImg')} placeholder='Profile Image' />
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default EditSellerProfile;
