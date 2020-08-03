import React from 'react';
import {Row, Col} from 'antd';
import PlusMinusCart from '../../../container/cart/Cart-plus-minus';

import { connect } from 'react-redux';


class OrderList extends React.PureComponent {

    render() {
        
        return (

            this.props.cartItems.map(item =>
                <Row className="row-desc">
                    <Col span={4}><img className="pd-img" alt="product" src={item.varients.media} style={{ width: 104,heigth: 112 }}></img></Col>
                    <Col span={12} className="desc-cart-left">
                        <h1>{item.title}</h1>
                        <h2>{item.productId}</h2>
                        <h3>{item.dropdown.title} : {item.dropdown.options} - {item.varients.title}</h3>
                        <h3><span className="rate-1-x"></span><span className="rate-2-x">$1999</span><span className="rate-3-x">71%off</span></h3>
                    </Col>
                    <Col span={8} className="desc-cart-right">
                        <h1>Delivery by Sun Jul 19 | $65 </h1>
                        <h2>10 Days Replacement Policy</h2>
                    </Col>
                    <Row className="bottom-desc-line">
                        <PlusMinusCart />
                    </Row>
                </Row>
            ) 
        )
    }
};


const mapPropsToState = (store) => {
    return {
        cartItems: store.cartItems,
        user: store.user,
        isAuthorised: store.isAuthorised,

    }
}


export default connect(mapPropsToState, null)(OrderList);