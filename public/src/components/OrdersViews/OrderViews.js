import React from 'react';
import { Steps } from 'antd';
import OrderView from './OrderView/OrderView';

class OrederViews extends React.PureComponent {

    render() {
 

        const mapedComponent = this.props.orders.map((item, index) => {
            return <OrderView key={index} order={item} />
        });

        return (
            <React.Fragment>
                {mapedComponent}
            </React.Fragment>
        )
    }
}

export default OrederViews;
