import React from 'react';
import { Row, Col } from 'antd';
import PlusMinusCart from '../CartPlusMinus/Cart-plus-minus';


class OrderList extends React.PureComponent {



    render() {

        const mapedArr = this.props.cartItems.map((item, index) => {
            return (
                <Row key={index} className="row-desc">
                    <Col span={4}><img className="pd-img" alt="product" src={item.varients.media} style={{ width: 104, heigth: 112 }}></img></Col>
                    <Col span={12} className="desc-cart-left">
                        <h1>{item.title}</h1>
                        <h2>{item.productId}</h2>
                        <h3>{item.dropdown.title} : {item.dropdown.options} - {item.varients.title}</h3>
                        <h3><span className="rate-1-x"></span><span className="rate-2-x">$1999</span><span className="rate-3-x">71%off - {item.price}</span></h3>
                    </Col>
                    <Col span={8} className="desc-cart-right">
                        <h1>Delivery by Sun Jul 19 | $65 </h1>
                        <h2>10 Days Replacement Policy</h2>
                    </Col>
                    <Row className="bottom-desc-line">
                        <PlusMinusCart
                            $editCart={this.props.$editCart}
                            $deleteCartItem={this.props.$deleteCartItem}
                            isAuthorised={this.props.isAuthorised}
                            cartId={item._id} 
                            index={index}
                            quantity={item.quantity} />
                    </Row>
                </Row>
            )
        });


        return (
            <React.Fragment>
                {mapedArr}
            </React.Fragment>
        )
    }
};



export default OrderList;