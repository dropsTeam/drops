import React from 'react';

class ProductRating extends React.PureComponent {

    render() {
        return (
            <div>
                <hr />
                <span style={{ fontWeight: 600 }} >  <span className="badge badge-success">{this.props.rating} &#9734; </span> {this.props.title}  </span>
                <pre style={{ whiteSpace: 'pre-wrap', padding: '20px 0' }}>{this.props.discription}</pre>
                <div > <strong>{this.props.helpful}</strong> people found this helpful</div>
                <button onClick={() => { if(this.props.isHelpful){this.props.removeHelpful(this.props.index); return} this.props.postHelpful(this.props.index) }} className='btn btn-sm btn-primary my-3'> {(this.props.isHelpful) ? '-' : '+'} Helpful</button>
                <div style={{ color: 'grey', fontSize: '13px' }}>By <strong>{this.props.fullName}</strong> {this.props.timeStamp} </div>
            </div>
        )
    }
}

export default ProductRating;
