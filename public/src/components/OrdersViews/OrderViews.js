import React from 'react';
import { Steps } from 'antd';
import OrderView from './OrderView/OrderView';

class OrederViews extends React.PureComponent {

    state = {
        current: [1, 2, 3, 2, 3]
    }

    render() {

        const mapedComponent = this.state.current.map((item, index) => {
            return <OrderView key={index} current={item} />
        });

        return (
            <React.Fragment>
                {mapedComponent}
            </React.Fragment>
        )
    }
}

export default OrederViews;
