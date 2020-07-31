import React from 'react';
import { Steps } from 'antd';

class OrederView extends React.PureComponent {


    render() {
        return (
            <Steps current={2} >
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
            </Steps>
        )
    }
}

export default OrederView;
