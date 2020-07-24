import React from 'react';

import QNA from './QNA/QNA';


class ProductQNA extends React.PureComponent {



    constructor(props) {
        super(props);
        this.mapedQuestion.bind(this);
    }

    mapedQuestion(arrOfQNA) {
        return arrOfQNA.map((item, index) => {
            return (
                <QNA key={Math.random()} question={item.question} answer={item.answer} />
            )
        })
    }

    render() {

        return (
            <React.Fragment>
                <h3>Questions and Answers <button className='btn btn-primary btn-sm float-right' onClick={() => this.props.$viewModel('qnaModel', true)} >Ask A Question</button> </h3>
                <hr />

                {this.mapedQuestion(this.props.qna)}

                <a style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }}>Load More</a>

            </React.Fragment>
        )
    }
}

export default ProductQNA;
