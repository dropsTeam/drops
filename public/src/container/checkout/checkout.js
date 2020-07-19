import React, { Component } from 'react';
import {Row, Col, Card} from 'antd';
import { Collapse } from 'antd';
import GoogleBtn from '../GoogleBtn/GoogleBtn';

const { Panel } = Collapse;





class Cartcheckout extends Component {
  render() {
    return (
        <Row style={{backgroundColor:'#F1F3F6'}}>
            <Col className="col-left-cart" xs={24} sm={24} md={24} lg={24} xl={16}>
            <Card  title="LOGIN OR SIGNUP" className="cart-right-check" headStyle={{backgroundColor:'#2874F0', color:'white', height:48}}>
                <Row>
                    <Col  span={12}>
                        < GoogleBtn />
                        

                    </Col>

                    <Col  span={12}>
                   singh

                    </Col>


                </Row>
            </Card>

            <Card  title="DELIVERY ADDRESS" className="cart-right-check" headStyle={{ color:'grey', height:48}}>
                
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