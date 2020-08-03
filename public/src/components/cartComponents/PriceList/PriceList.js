import React from 'react';
import { connect } from 'react-redux';

class PriceList extends React.PureComponent {

    render() {
        return (

            <div>
                <p>Price <span className="p-details">fd</span></p>
                <p>Delivery Fee <span className="p-details">FREE</span></p>
                <span>--------------------------------------------------------------</span>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>Total Amount <span className="p-details">yoyo</span></p>
                <span>--------------------------------------------------------------</span>
            </div>

        )
    }
}

const mapPropsToState = (store) => {
    return {
        cartItems: store.cartItems,
        user: store.user,
        isAuthorised: store.isAuthorised,

    }
}


export default connect(mapPropsToState, null)(PriceList);