import React from 'react';

class QNA extends React.PureComponent {


    render() {
        return (
            <React.Fragment>
                <div style={{ fontWeight: 700, padding: ' 0 0 20px 0' }}>Q: {this.props.question}</div>
                <div style={{ fontWeight: 700, paddingBottom: '15px' }}>A: {this.props.answer}</div>
                <div className='pb-2' style={{ color: 'grey', fontSize: 12, fontWeight: 'bold' }}>{'By '+ this.props.fullName +' at ' + this.props.timeStamp}</div>
                <hr />
            </React.Fragment>
        )
    }
}
export default QNA;
