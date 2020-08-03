import React from 'react';


class PriceList extends React.PureComponent {

    render() {

     
            return (

                <div>
                    <p>Total Items <span className="p-details"> {this.props.cartItems.reduce((a, c) => a + c.quantity, 0)}</span></p>
                    <p>Delivery Fee <span className="p-details">FREE</span></p>
                    <span>--------------------------------------------------------------</span>
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>Total Amount <span className="p-details"> $ {this.props.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} </span></p>
                    <span>--------------------------------------------------------------</span>
                </div>
            )
      

        
    }
}




export default PriceList;