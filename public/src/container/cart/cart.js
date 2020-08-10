import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'antd';
import { connect } from 'react-redux';

import PriceList from '../../components/cartComponents/PriceList/PriceList.js';
import OrderList from '../../components/cartComponents/OrderList/OrderList';
import { editCart, deleteCartItem } from '../../Redux/Actions/CartActions';
import '../checkout/checkout';
import checkout from '../checkout/checkout';
import { NavLink } from 'react-router-dom';

class Cart extends Component {

    editCart = (quantity, index) => {
        this.props.$editCart(quantity, index, this.props.isAuthorised);
    }

    deleteCartItem = (index) => {
        this.props.$deleteCartItem(index, this.props.isAuthorised);
    }

    


    render() {

        

        return (

            <Row style={{ backgroundColor: '#F1F3F6' }}>
                <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
                    <Card title="MY SHOPPING BAG" className="cart-right-check">

                        <OrderList $editCart={(quantity, index) => this.editCart(quantity, index)} $deleteCartItem={(index) => this.deleteCartItem(index)} isAuthorised={this.props.isAuthorised} cartItems={this.props.cartItems} />

                        <Row className="row-desc-2">
                            <Form>
                                <NavLink  to='/checkout'>
                                    <Button className="fitem00" onClick={checkout} disabled={this.props.cartItems.length === 0}><span>PLACE ORDER</span></Button>
                                </NavLink>
                            </Form>
                        </Row>

                    </Card>
                </Col>

                <Col className="col-right-cart" xl={8}>
                    <Card title="PRICE DETAILS" className="cart-left" headStyle={{ color: '#878787' }} >
                        <PriceList $editCart={(quantity, productId) => this.editCart(quantity, productId)} isAuthorised={this.props.isAuthorised} cartItems={this.props.cartItems} />
                    </Card>
                </Col>
            </Row>

        );
    }
}



const mapPropsToState = (store) => {
    return {
        cartItems: store.cartItems,
        isAuthorised: store.isAuthorised,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        $editCart: (quantity, index, isAuthorised) => dispatch(editCart(quantity, index, isAuthorised)),
        $deleteCartItem: (index, isAuthorised) => dispatch(deleteCartItem(index, isAuthorised))
    }
}


export default connect(mapPropsToState, mapDispatchToProps)(Cart);