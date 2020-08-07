import React from 'react';

import { PageHeader, Button, Menu, Dropdown, Avatar, Empty } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './sellerPortal.module.css';

import ResultsBlock from "../../components/ProductsResults/ResultsBlock/ResultsBlock.js"
import AddProduct from './Modals/AddProduct';
import EditSellerProfile from './Modals/EditSellerProfile';
import AnswerQuestionModal from './Modals/answerQuestions';

import OrderViewModal from './Modals/orderViewModal';
import { connect } from 'react-redux';
import { editSellerAccount, logout } from '../../Redux/Actions/AuthActions';

import { mainHttp as axios } from "../../Axios/Axios";

class SellerPortal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: {
                AddProduct: false,
                EditSellerProfile: false,
                AnswerQuestions: false,
                orderView: false
            },
            products: [],
            stats: {
                totalOrders: 0,
                totalSaleAmount: 0,
                totalProducts: 0
            }
        }

        this.toggleModal.bind(this);
    }



    // for getting the particular product on mount---
    componentDidMount() {
        this.fetch();
    }

    async fetch() {
        try {

            const products = await axios.get("/products/seller")
            const stats = await axios.get('/user/seller/stats');

            this.setState({
                ...this.state,
                products: [...products.data],
                stats: {
                    ...this.state.stats,
                    totalOrders: stats.data.totalOrders,
                    totalSaleAmount: stats.data.totalSaleAmount,
                    totalProducts: stats.data.totalProducts
                }
            });


        } catch (err) {
            console.log(err)
        }
    }



    toggleModal(modalName, visiblity) {

        const newState = { ...this.state, ...this.state.view };
        newState.view[modalName] = visiblity;

        this.setState(newState);
    }


    render() {

        console.log(this.state)

        const menu = (
            <Menu>
                <Menu.Item onClick={() => this.toggleModal('AddProduct', true)}>
                    <a target="_blank" rel="noopener noreferrer" >
                        + Add Product
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={() => this.toggleModal('EditSellerProfile', true)}>
                        Edit Profile
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={this.props.$logout}>
                        Logout
                    </a>
                </Menu.Item>
            </Menu>
        );

        if (this.props.isAuthorised) {
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
                            <Button key="3" onClick={() => this.toggleModal('orderView', true)}>Orders</Button>,
                            <Button key="2" onClick={() => this.toggleModal('AnswerQuestions', true)} >Pending Questions</Button>,

                        ]}
                    />

                    <div style={{ color: 'white', margin: '0px', background: '#0099ff' }}>
                        <p className='m-0 h2 p-4'>
                            {(this.props.user.seller.profileImg === 'Default' || this.props.user.seller.profileImg.length === 0) ? <Avatar style={{ marginRight: '30px' }} size="large" icon={<UserOutlined />} /> : <Avatar style={{ marginRight: '30px' }} size="large" src={this.props.user.seller.profileImg} />}
                            Welcome Back {this.props.user.seller.name}
                        </p>
                        <pre className='m-0 p-4 h6' style={{ color: 'white', paddingLeft: '30px', whiteSpace: 'pre-wrap' }}>{this.props.user.seller.bio}</pre>

                    </div>
                    <svg style={{ margin: '0px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,170.7C672,171,768,149,864,160C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


                    <div className="row" style={{ padding: '0 20px' }}>
                        <div className="col-sm-12 col-md-4 mt-2 ">
                            <div className="card" style={{ backgroundColor: '#FEC009', color: 'white' }}>
                                <div className="card-body" >
                                    <p className="card-text">Revenue</p>
                                    <h1 className="card-title " style={{ color: 'white' }}>${this.state.stats.totalSaleAmount} </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-2 ">
                            <div className="card" style={{ backgroundColor: '#DD6777', color: 'white' }}>
                                <div className="card-body">

                                    <p className="card-text">Number Of Orders</p>
                                    <h1 className="card-title" style={{ color: 'white' }}>{this.state.stats.totalOrders}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-2 ">
                            <div className="card" style={{ backgroundColor: '#6EC080' }}>
                                <div className="card-body" style={{ color: 'white' }}>
                                    <p className="card-text">Number Of Products</p>
                                    <h1 className="card-title " style={{ color: 'white' }}>{this.state.stats.totalProducts} </h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />

                    <div>
                        <p className='h2' style={{ padding: '30px 0 0 20px' }}>Your Products</p>
                        <div className={styles.results__block} >
                            {(this.state.products.length === 0)? <Empty /> : <ResultsBlock numbers={this.state.products} />}
                        </div>
                    </div>


                    <AnswerQuestionModal $toggleModal={(a, b) => this.toggleModal(a, b)} isVisible={this.state.view.AnswerQuestions} />
                    <OrderViewModal $toggleModal={(a, b) => this.toggleModal('orderView', b)} isVisible={this.state.view.orderView} />
                    <EditSellerProfile
                        name={this.props.user.seller.name}
                        bio={this.props.user.seller.bio}
                        profileImg={this.props.user.seller.profileImg}

                        onSave={(data) => this.props.$editSellerProfile(data)}
                        isVisible={this.state.view.EditSellerProfile}
                        $toggleModal={(a) => this.toggleModal('EditSellerProfile', a)} />

                </div>
            )
        } else {
            this.props.history.goBack();
            return (
                <h1></h1>
            )

        }


    }

}

const mapPropsToState = store => {
    return {
        user: store.user,
        isAuthorised: store.isAuthorised
    }
}

const mapPropsToDispatch = dispatch => {

    return {
        $editSellerProfile: (data) => dispatch(editSellerAccount(data)),
        $logout: () => dispatch(logout())
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(SellerPortal);


