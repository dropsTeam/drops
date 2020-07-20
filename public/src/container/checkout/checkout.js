import React, { Component } from 'react';
import {Row, Col, Card, List} from 'antd';
import { Collapse } from 'antd';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import {CarOutlined, BellOutlined, StarOutlined   } from '@ant-design/icons';
import DeliverForm from './checkoutdlvform';

const { Panel } = Collapse;





class Cartcheckout extends Component {
  render() {
    return (
        <Row style={{backgroundColor:'#F1F3F6'}}>
            <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
            <Card  title="LOGIN OR SIGNUP" className="cart-right-check" headStyle={{backgroundColor:'#2874F0', color:'white', height:48}}>
                <Row classname="row-check-login">
                    <Col  span={12}>
                        <GoogleBtn visible={true} />
                        

                    </Col>

                    <Col  span={12} classname="right-check-col">
                        <Row  classname="right-desc-check">
                            <span className='advt-change'>Advantages of our secure login</span>
                            <List classname="list-check-ul">
                                <List.Item classname="list-item-check">
                                    <span classname="advt-desc"> <CarOutlined style={{color:'#2874F0'}}/> Easily Track Orders, hassle free Returns</span>
                                </List.Item>

                                <List.Item classname="list-item-check">
                                    <span classname="advt-desc"> <BellOutlined style={{color:'#2874F0'}} /> Get Revelant Alerts and Recommendation</span>                                                                  
                                </List.Item>

                                <List.Item classname="list-item-check">
                                    <span classname="advt-desc"> <StarOutlined  style={{color:'#2874F0'}} /> Wishlist,Reviews,Ratings and more.</span>
                                </List.Item>
                            </List>
                        </Row>
                    </Col>


                </Row>
            </Card>

            <Card  title="DELIVERY ADDRESS" className="cart-right-check" headStyle={{ color:'grey', height:48}}>
                <DeliverForm />
                
            </Card>

            <Card  title="ORDER SUMMARY" className="cart-right-check" headStyle={{ color:'grey', height:48}}>
                
            </Card>

            <Card  title="PAYMENT OPTION" className="cart-right-check" headStyle={{ color:'grey', height:48}}>
                
            </Card>
            </Col>
            <Col className="col-right-cart" xl={8}>
                <Card title="PRICE DETAILS" className="cart-left" headStyle={{color:'#878787'}} >
                    <p>Price <span className="p-details">yoyo</span></p>
                    <p>Delivery Fee <span className="p-details">FREE</span></p>
                    <span>--------------------------------------------------------------</span>
                    <p style={{fontSize:20, fontWeight:"bold"}}>Total Amount <span className="p-details">yoyo</span></p>
                    <span>--------------------------------------------------------------</span>
                </Card>
            </Col>
        </Row>

      

   

      
			
    );
  }
}

export default Cartcheckout;