import React from 'react';

import { PageHeader, Button, Menu, Dropdown, Modal } from 'antd';
import ResultsBlock from "../../components/ProductsResults/ResultsBlock/ResultsBlock.js"
import styles from './sellerPortal.module.css';
import AddProduct from './Modals/AddProduct';
import EditSellerProfile from './Modals/EditSellerProfile';


class SellerPortal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: {
                AddProduct: false,
                EditSellerProfile: false
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
                <EditSellerProfile isVisible={this.state.view.EditSellerProfile} $toggleModal={(modalName, visible) => this.toggleModal(modalName, visible)} />
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
                <div className="row" style={{ padding: '0 20px' }}>
                    <div className="col-sm-12 col-md-4 mt-2 ">
                        <div className="card" style={{ backgroundColor: '#FEC009', color: 'white' }}>
                            <div className="card-body" >
                                <p className="card-text">Revenue</p>
                                <h1 className="card-title " style={{ color: 'white' }}>$3,567.53 </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-2 ">
                        <div className="card" style={{ backgroundColor: '#DD6777', color: 'white' }}>
                            <div className="card-body">

                                <p className="card-text">Number Of Orders</p>
                                <h1 className="card-title" style={{ color: 'white' }}>30,000</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-2 ">
                        <div className="card" style={{ backgroundColor: '#6EC080' }}>
                            <div className="card-body" style={{ color: 'white' }}>
                                <p className="card-text">Number Of Products</p>
                                <h1 className="card-title " style={{ color: 'white' }}>99 </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />

               <div>
                <p className='h2' style={{ padding: '30px 0 0 20px' }}>Your Products</p>
                <div 
                  className={styles.results__block}
                  >
                    <ResultsBlock numbers={numbers} />
                </div>
              </div>

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


const numbers = [
    {
     id:1,
     img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
     title : "T-Shirt",
     price : "450"
    },
    {
     id:2,
     img:"https://rukminim1.flixcart.com/image/309/371/k7531jk0/t-shirt/z/c/a/s-rh-roundnck-x-hlfslv-blk-org-skin-rockhard-original-imafpfvkgtxeuz77.jpeg?q=50",
     title : "Striped Men Routine Wear",
     price : "450"
    },
    {
     id:3,
     img:"https://rukminim1.flixcart.com/image/309/371/jtn9bww0/t-shirt/5/g/g/m-hm-1001-black-red-helmont-original-imafdfvvr8hqdu65.jpeg?q=50",
     title : "T-Shirt",
     price : "450"
    },
    {
     id:4,
     img:"https://rukminim1.flixcart.com/image/309/371/k30h8y80/t-shirt/u/z/s/s-shp275282-shapphr-original-imafjvg4nngzwrfw.jpeg?q=50",
     title : "T-Shirt",
     price : "450"
    },
    {
     id:5,
     img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
     title : "T-Shirt",
     price : "450"
    },
    {
     id:6,
     img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
     title : "T-Shirt",
     price : "150"
    },
    {
     id:7,
     img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
     title : "T-Shirt",
     price : "250"
    }
    // {
    //  id:8,
    //  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
    //  title : "T-Shirt",
    //  price : "450"
    // }
   ]