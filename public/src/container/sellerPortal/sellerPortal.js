import React from 'react';

import { PageHeader, Button, Menu, Dropdown, Avatar, Empty, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './sellerPortal.module.css';

import AddEditProduct from './Modals/AddEditProduct';
import EditSellerProfile from './Modals/EditSellerProfile';
import OrderViewModal from './Modals/orderViewModal';
import AnswerQuestionModal from './Modals/answerQuestions';
import SellerProductListView from './SellerProductListView/SellerProductListView';

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
                orderView: false,
                EditProduct: false
            },
            products: [],
            editProductIndex: -1,
            stats: {
                totalOrders: 0,
                totalSaleAmount: 0,
                totalProducts: 0
            },
            page: 0
        }

        this.toggleModal.bind(this);
    }



    // for getting the particular product on mount---
    componentDidMount() {
        this.fetch();
    }

    async fetch() {
        try {

            this.fetchProducts();
            const stats = await axios.get('/user/seller/stats');

            this.setState({
                ...this.state,
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

    fetchProducts = async () => {

        try {

            const products = await axios.get(`/products/seller/${this.state.page}`);

            if (products.data.length === 0) { message.error('No more elements found'); return; }

            const newData = [...this.state.products].concat(products.data);

            this.setState((prevState, prevprops) => {
                return {
                    products: [...newData],
                    page: prevState.page + 1
                }
            });
        } catch (err) {
            console.log(err);
        }

    }



    toggleModal(modalName, visiblity) {

        const newState = { ...this.state, ...this.state.view };
        newState.view[modalName] = visiblity;

        this.setState(newState);
    }

    postProduct = async (data) => {
        try {
            const product = await axios.post('/products', { ...data });
            console.log(product.data);
            this.toggleModal('AddProduct', false);

        } catch (err) {
            console.log(err);
        }
    }

    deleteProduct = async (index) => {
        try {

            await axios.delete(`/products/p/${this.state.products[index]._id}`);
            let newArr = [...this.state.products];
            newArr.splice(index, 1);
            this.setState({ ...this.state, products: [...newArr] });


        } catch (err) {
            console.log(err)
        }
    }

    onProductEditClick = async (index) => {
        this.setState((preState) => {
            return {
                ...preState,
                editProductIndex: index,
                view: {
                    ...preState.view,
                    EditProduct: true
                }
            }
        });
    }

    editProduct = async (data) => {
        try {

            const product = await axios.put('/products', { ...data, _id: this.state.products[this.state.editProductIndex]._id });
            let newArr = [...this.state.products];
            newArr[this.state.editProductIndex] = { ...this.state.products[this.state.editProductIndex], ...data };
            this.setState({
                ...this.state,
                products: [...newArr]
            })
            this.toggleModal('EditProduct', false);

        } catch (err) {
            console.log(err);
        }
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

                    <AddEditProduct
                        isVisible={this.state.view.AddProduct}
                        $toggleModal={(visible) => this.toggleModal('AddProduct', visible)}
                        submit={(data) => this.postProduct(data)} />

                    <AddEditProduct
                        isVisible={this.state.view.EditProduct}
                        defaultValues={(this.state.editProductIndex !== -1) && this.state.products[this.state.editProductIndex]}
                        $toggleModal={(visible) => this.toggleModal('EditProduct', visible)}
                        submit={(data) => this.editProduct(data)} />


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

                        ]} />

                    <div style={{ color: 'white', margin: '0px', background: '#0099ff' }}>
                        <p className='m-0 h2 p-4'>
                            {(this.props.user.seller.profileImg === 'Default' || this.props.user.seller.profileImg.length === 0) ? <Avatar style={{ marginRight: '30px' }} size="large" icon={<UserOutlined />} /> : <Avatar style={{ marginRight: '30px' }} size="large" src={this.props.user.seller.profileImg} />}
                            Welcome Back {this.props.user.seller.name}
                        </p>
                        <pre className='m-0 p-4 h6' style={{ color: 'white', paddingLeft: '30px', whiteSpace: 'pre-wrap' }}>{this.props.user.seller.bio}</pre>

                    </div>
                    <svg style={{ margin: '0px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,170.7C672,171,768,149,864,160C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


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
                            {(this.state.products.length === 0) ? <Empty /> : <SellerProductListView loadMore={this.fetchProducts} deleteProduct={index => this.deleteProduct(index)} products={this.state.products} onEdit={(index) => this.onProductEditClick(index)} />}
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


