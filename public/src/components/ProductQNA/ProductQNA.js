import React from 'react';

class ProductQNA extends React.PureComponent {

    constructor(props) {
        super(props);
        this.mapedQuestion.bind(this);
    }

    mapedQuestion(arrOfQNA) {
        return arrOfQNA.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div style={{ fontWeight: 700, padding: ' 0 0 20px 0' }}>Q: {item.question}</div>
                    <div >A: {item.answer}</div>
                    <div className='pb-2' style={{ color: 'grey', fontSize: 12, fontWeight: 'bold' }}>{item.timeStamp}</div>
                    <hr />
                </React.Fragment>
            )
        })
    }

    render() {

        return (
            <React.Fragment>
                <h3>Questions and Answers <button className='btn btn-primary btn-sm float-right' >Ask A Question</button> </h3>
                <hr />

                {this.mapedQuestion(this.props.qna)}

                <a style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }}>Load More</a>

            </React.Fragment>
        )
    }
}

export default ProductQNA;
