import React, { Component } from 'react';
import { Input, Row, Col, Card, Form, Button, Divider } from 'antd';
import watch from '../../media/watch.jpeg';
import PlusMinusCart from './Cart-plus-minus';
import {connect}  from 'react-redux';
import Item from 'antd/lib/list/Item';



// style={{ width: 600 }}
const { Search } = Input;



const Orderlist = (

    <div>            
        <Row className="row-desc">
                <Col span={4}><img className="pd-img" alt="product" src={watch} style={{ width: 104, heigth: 112 }}></img></Col>
            
                <Col span={12} className="desc-cart-left">
                    <h1>{this.props.cartItems.title}</h1>
                    <h2>Black Strap, Free</h2>
                    <h3>Seller: Mahima Electronics</h3>
                    <h3><span className="rate-1-x"></span><span className="rate-2-x">$1999</span><span className="rate-3-x">71% off</span></h3>
                </Col>
                <Col span={8} className="desc-cart-right">
                    <h1>Delivery by Sun Jul 19 | $65 </h1>
                    <h2>10 Days Replacement Policy</h2>
                </Col>
                <Row className="bottom-desc-line">
                    <PlusMinusCart />
                </Row>
            
        </Row> 
    </div>

);

const Pricelist = (
    <div>
                        <p>Price <span className="p-details">fd</span></p>
                        <p>Delivery Fee <span className="p-details">FREE</span></p>
                        <span>--------------------------------------------------------------</span>
                        <p style={{ fontSize: 20, fontWeight: "bold" }}>Total Amount <span className="p-details">yoyo</span></p>
                        <span>--------------------------------------------------------------</span>
                        </div>

);


class Cart extends Component {

  

    render() {
       

        return (


            

                <Row style={{ backgroundColor: '#F1F3F6' }}>
                        <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
                            <Card title="MY SHOPPING BAG" className="cart-right-check">                       
                                {Orderlist}
                                <Row className="row-desc-2">
                                    <Form>
                                        <Button className="fitem00"><a>PLACE ORDER</a></Button>
                                    </Form>
                                </Row>
                                
                            </Card>
                        </Col>
                    
                    <Col className="col-right-cart" xl={8}>
                        <Card title="PRICE DETAILS" className="cart-left" headStyle={{ color: '#878787' }} >
                            {Pricelist}
                        </Card>
                    </Col>
                </Row>
           
        );
    }
}


const mapPropsToState = (store) => {
    return {
        cartItems: store.cartItems,
        user: store.user,
        isAuthorised: store.isAuthorised,
        
    }
}


export default connect(mapPropsToState, null)(Cart);
export {Orderlist,Pricelist};