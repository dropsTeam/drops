import React from 'react';

import { PageHeader, Button, Menu, Dropdown, Modal } from 'antd';
import ResultsBlock from "../../components/ProductsResults/ResultsBlock/ResultsBlock.js"
import styles from './sellerPortal.module.css';
import AddProduct from './Modals/AddProduct';
import EditSellerProfile from './Modals/EditSellerProfile';
import AnswerQuestionModal from './Modals/answerQuestions';

import {mainHttp as axios} from "../../Axios/Axios";

class SellerPortal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: {
                AddProduct: false,
                EditSellerProfile: false,
                AnswerQuestions: false
            }
        }

        this.toggleModal.bind(this);
    }


    componentDidMount(){
       axios.get("/products/seller")
        .then(res=>{
            console.log(res)
        })
    }



    toggleModal(modalName, visiblity) {

        const newState = { ...this.state, ...this.state.view };
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
                        <Dropdown key={1} overlay={menu} placement="bottomLeft" arrow>
                            <Button type="primary">Settings</Button>
                        </Dropdown>,
                        <Button key="3">Orders</Button>,
                        <Button key="2" onClick={() => this.toggleModal('AnswerQuestions', true)} >Pending Questions</Button>,

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
                        <ResultsBlock 
                        //    numbers={numbers} 
                        />
                    </div>
                </div>

                <AnswerQuestionModal $toggleModal={(a,b) => this.toggleModal(a,b)} isVisible={this.state.view.AnswerQuestions} />



            </div>
        )
    }

}

export default SellerPortal;


