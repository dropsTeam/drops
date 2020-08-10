import React, { Component, useState } from 'react';
import { Row, Col, Card, List, Radio, Button } from 'antd';
import { Collapse } from 'antd';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import { CarOutlined, BellOutlined, StarOutlined } from '@ant-design/icons';
import DeliverForm from './checkoutdlvform';
import PaymentForm from './payment';
import { connect } from 'react-redux';
import PriceList from '../../components/cartComponents/PriceList/PriceList';
import OrderList from '../../components/cartComponents/OrderList/OrderList';
import { editCart, deleteCartItem, checkout } from '../../Redux/Actions/CartActions';
import { editProfile } from '../../Redux/Actions/AuthActions';

const { Panel } = Collapse;



class Cartcheckout extends Component {


    editCart = (quantity, index) => {
        this.props.$editCart(quantity, index, this.props.isAuthorised);
    }

    addToCart = (item) => {
        this.props.$addToCart(item, this.props.isAuthorised);
    }

    deleteCartItem = (index) => {
        this.props.$deleteCartItem(index, this.props.isAuthorised);
    }

    editProfile = (details) => {
        this.props.$editProfile(details, this.props.isAuthorised);
    }

    checkout = () => {
        for (let cartItem of this.props.cartItems) {
            this.props.$checkout(cartItem._id);
        }
    }



    state = {
        value: 1
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };


    render() {

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };



        const { value } = this.state;


        return (
            <Row style={{ backgroundColor: '#F1F3F6' }}>
                <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
                    <Card title="LOGIN OR SIGNUP" className="cart-right-check" headStyle={{ backgroundColor: '#2874F0', color: 'white', height: 48 }}>
                        <Row className="row-check-login">
                            <Col span={12}>
                                <GoogleBtn visible={true} />
                            </Col>

                            <Col span={12} className="right-check-col">
                                <Row className="right-desc-check">
                                    <span className='advt-change'>Advantages of our secure login</span>
                                    <List className="list-check-ul">
                                        <List.Item className="list-item-check">
                                            <span className="advt-desc"> <CarOutlined style={{ color: '#2874F0' }} /> Easily Track Orders, hassle free Returns</span>
                                        </List.Item>

                                        <List.Item className="list-item-check">
                                            <span className="advt-desc"> <BellOutlined style={{ color: '#2874F0' }} /> Get Revelant Alerts and Recommendation</span>
                                        </List.Item>

                                        <List.Item className="list-item-check">
                                            <span className="advt-desc"> <StarOutlined style={{ color: '#2874F0' }} /> Wishlist,Reviews,Ratings and more. </span>
                                        </List.Item>
                                    </List>
                                </Row>
                            </Col>
                        </Row>



                    </Card>

                    {this.props.isAuthorised && (

                        <div>
                            <Card title="DELIVERY ADDRESS" className="cart-right-check" headStyle={{ color: 'grey', height: 48 }}>
                                <DeliverForm $editProfile={(details) => this.editProfile(details)} isAuthorised={this.props.isAuthorised} />
                            </Card>
                            {
                                (this.props.user.userAddress.address.trim() !== '') && (

                                    <React.Fragment>


                                        <Card title="ORDER SUMMARY" className="cart-right-check" headStyle={{ color: 'grey', height: 48 }}>
                                            <OrderList $editCart={(quantity, index) => this.editCart(quantity, index)} $deleteCartItem={(index) => this.deleteCartItem(index)} isAuthorised={this.props.isAuthorised} cartItems={this.props.cartItems} />
                                        </Card>

                                        <Card title="PAYMENT OPTION" className="cart-right-check" headStyle={{ color: 'grey', height: 48 }}>
                                            <Radio.Group onChange={this.onChange} value={value}>
                                                <Radio style={radioStyle} value={1}>
                                                    Paypal
                                                </Radio>
                                                <Radio style={radioStyle} value={2}>
                                                    Cash On Delivery
                                                </Radio>
                                                <Radio style={radioStyle} value={3}>
                                                    Debit
                                                    {value === 3 ? <PaymentForm /> : null}
                                                </Radio>
                                            </Radio.Group>
                                        </Card>

                                        <div>
                                            <Button type="primary" onClick={this.checkout} block style={{ margin: 20, height: 60, width: 820, fontSize: 16, fontWeight: 'bold', color: 'white', letterSpacing: 2 }} >
                                                PLACE ORDER
                                            </Button>
                                        </div>


                                    </React.Fragment>
                                )
                            }

                        </div>
                    )}

                </Col>
                {this.props.isAuthorised && (
                    <Col className="col-right-cart" xl={8}>
                        <Card title="PRICE DETAILS" className="cart-left" headStyle={{ color: '#878787' }} >
                            <PriceList $editCart={(quantity, productId) => this.editCart(quantity, productId)} isAuthorised={this.props.isAuthorised} cartItems={this.props.cartItems} />
                        </Card>
                    </Col>
                )}
            </Row>


        );
    }
}

const mapPropsToState = (store) => {
    return {
        cartItems: store.cartItems,
        isAuthorised: store.isAuthorised,
        user: store.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        $editCart: (quantity, index, isAuthorised) => dispatch(editCart(quantity, index, isAuthorised)),
        $deleteCartItem: (index, isAuthorised) => dispatch(deleteCartItem(index, isAuthorised)),
        $editProfile: (details, isAuthorised) => dispatch(editProfile(details, isAuthorised)),
        $checkout: (cartId, isAuthorised) => dispatch(checkout(cartId, isAuthorised))

    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Cartcheckout);