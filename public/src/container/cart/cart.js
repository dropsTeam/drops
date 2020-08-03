import React, { Component } from 'react';
import { Input, Row, Col, Card, Form, Button } from 'antd';
import { connect } from 'react-redux';
import PriceList from '../../components/cartComponents/PriceList/PriceList'
import OrderList from '../../components/cartComponents/OrderList/OrderList'


// style={{ width: 600 }}






class Cart extends Component {



    render() {

        const { Search } = Input;



        return (




            <Row style={{ backgroundColor: '#F1F3F6' }}>
                <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
                    <Card title="MY SHOPPING BAG" className="cart-right-check">
                        <OrderList />
                        <Row className="row-desc-2">
                            <Form>
                                <Button className="fitem00"><a>PLACE ORDER</a></Button>
                            </Form>
                        </Row>

                    </Card>
                </Col>

                <Col className="col-right-cart" xl={8}>
                    <Card title="PRICE DETAILS" className="cart-left" headStyle={{ color: '#878787' }} >
                        <PriceList />
                    </Card>
                </Col>
            </Row>

        );
    }
}





export default (Cart);