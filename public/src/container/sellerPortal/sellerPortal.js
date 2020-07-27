import React from 'react';

import { PageHeader, Button, Menu, Dropdown, Modal } from 'antd';
import ProductResults from '../../components/ProductsResults/ProductsResults';
import styles from './sellerPortal.module.css';
import AddProduct from './Modals/AddProduct';

class SellerPortal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: {
                AddProduct: false
            }
        }

        this.toggleModal.bind(this);
    }

    toggleModal(modalName, visiblity) {

        const newState = {...this.state, ...this.state.view };
        newState.view[modalName] = visiblity;

        this.setState(newState);
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item onClick={() => this.toggleModal('AddProduct', true)}>
                    <a target="_blank" rel="noopener noreferrer" >
                        + Add Product
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        Edit Profile
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        Logout
                </a>
                </Menu.Item>
            </Menu>
        );


        return (
            <div>
                <AddProduct isVisible={this.state.view.AddProduct} $toggleModal={(modalName, visible) => this.toggleModal(modalName, visible)} />
                <PageHeader
                    className={styles.sitePageHeader + ' mb-2'}
                    onBack={() => null}
                    title="Dashboard"
                    subTitle="Seller"
                    extra={[
                        <Button key="3">Orders</Button>,
                        <Button key="2">Questions</Button>,

                        <Dropdown key={1} overlay={menu} placement="bottomLeft" arrow>
                            <Button type="primary">Settings</Button>
                        </Dropdown>
                    ]}
                />

                <p className='h2' style={{ padding: '30px 0 0 20px' }}> Stats</p>
                <div class="row" style={{ padding: '0 20px' }}>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#FEC009', color: 'white' }}>
                            <div class="card-body" >
                                <p class="card-text">Revenue</p>
                                <h1 class="card-title " style={{ color: 'white' }}>$3,567.53 </h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#DD6777', color: 'white' }}>
                            <div class="card-body">

                                <p class="card-text">Number Of Orders</p>
                                <h1 class="card-title" style={{ color: 'white' }}>30,000</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#6EC080' }}>
                            <div class="card-body" style={{ color: 'white' }}>
                                <p class="card-text">Number Of Products</p>
                                <h1 class="card-title " style={{ color: 'white' }}>99 </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />

                <p className='h2' style={{ padding: '30px 0 0 20px' }}> Products</p>

                <Modal
                    title="Basic Modal"
                    visible={false}
                    onOk={() => { }}
                    onCancel={() => { }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            </div>
        )
    }

}

export default SellerPortal;
