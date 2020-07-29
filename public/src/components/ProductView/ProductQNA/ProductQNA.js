import React from 'react';

import QNA from './QNA/QNA';
import { Form, Modal, Input } from 'antd';

class ProductQNA extends React.PureComponent {



    constructor(props) {
        super(props);
        this.state = {
            qnaModelVis: false,
            qna: [
                {
                    question: 'for gaming we can buy this',
                    answer: 'a big No,,, it s not good for gaming at all. battery performance is very poor.'
                },
                {
                    question: 'for gaming we can buy this',
                    answer: 'a big No,,, it s not good for gaming at all. battery performance is very poor.'
                },
            ],
            qnaForm: {
                question: ''
            },
        }
        this.mapedQuestion.bind(this);
    }

    mapedQuestion(arrOfQNA) {
        return arrOfQNA.map((item, index) => {
            return (
                <QNA key={Math.random()} question={item.question} answer={item.answer} />
            )
        })
    }

    togglePostModal = (isVisible) => {
        const newState = { ...this.state, qnaModelVis: isVisible };
        this.setState(newState);
    }
    changeHandler = (event) => {
        const newState = { ...this.state, ...this.state.qnaForm, qnaForm: { ...this.state.qnaForm.question, question: event.target.value } };
        this.setState(newState)
    }

    submitQNA = () => {
        this.togglePostModal(false);
        const newArr = [...this.state.qna];
        newArr.unshift({ question: this.state.qnaForm.question, answer: '' });
        this.setState({ ...this.state, qna: newArr });
    }

    render() {

        return (
            <React.Fragment>
                <h3>Questions and Answers <button className='btn btn-primary btn-sm float-right' onClick={() => this.togglePostModal(true)} >Ask A Question</button> </h3>
                <hr />

                {this.mapedQuestion(this.state.qna)}

                <a style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }}>Load More</a>

                <Modal
                    title="Ask a question"
                    visible={this.state.qnaModelVis}
                    onOk={this.submitQNA}
                    onCancel={() => this.togglePostModal(false)}>

                    <React.Fragment>

                        <Form.Item label="Question">
                            <Input placeholder={'Question ?'} value={this.state.qnaForm.question} required={true} onChange={(event) => { this.changeHandler(event) }} />
                        </Form.Item>

                    </React.Fragment>

                </Modal>

            </React.Fragment>
        )
    }
}

export default ProductQNA;
