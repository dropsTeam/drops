import React from 'react';
import { Steps } from 'antd';

class OrederView extends React.PureComponent {

    render() {
        return (
            <Steps current={this.props.current} >
                <Steps.Step title="Step 1" description="Placed Order" />
                <Steps.Step title="Step 3" description="Shipping" />
                <Steps.Step title="Step 2" description="Out for Delivery" />
                <Steps.Step title="Step 4" description="Arived" />
            </Steps>
        )
    }
}

export default OrederView;
