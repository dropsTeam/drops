import React from 'react';

import QNA from './QNA/QNA';
import { Form, Modal, Input } from 'antd';
import { mainHttp } from '../../../Axios/Axios';

class ProductQNA extends React.PureComponent {


    page = 0;

    constructor(props) {
        super(props);
        this.state = {
            qnaModelVis: false,
            qna: [

            ],
            qnaForm: {
                question: ''
            },
        }
        this.mapedQuestion.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    async fetch() {
        try {
            const qna = await mainHttp.get(`/qna?productId=${this.props.productId}&page=${this.page}`);
            console.log(qna.data);

            let newArr = [...this.state.qna];
            newArr = newArr.concat(qna.data);
            this.setState({
                ...this.state,
                qna: [...newArr]
            });
            this.page++;

        } catch (err) {
            alert('Error Occured fetching the QNA')
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetch();
    }

    mapedQuestion(arrOfQNA) {
        return arrOfQNA.map((item, index) => {
            return (
                <QNA key={Math.random()} question={item.question} fullName={item.user.fullName} answer={item.answer} timeStamp={item.timeStamp} />
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

    submitQNA = async () => {
        try {

            await mainHttp.post('/qna/question', { question: this.state.qnaForm.question, productId: this.props.productId });

            this.togglePostModal(false);
            const newArr = [...this.state.qna];
            newArr.unshift({ question: this.state.qnaForm.question, answer: '' });
            this.setState({ ...this.state, qna: newArr });
        } catch (err) {
            alert('Error Occured submitting the question.')
        }

    }

    render() {

        return (
            <React.Fragment>
                <h3>Questions and Answers <button className='btn btn-primary btn-sm float-right' onClick={() => this.togglePostModal(true)} >Ask A Question</button> </h3>
                <hr />

                {this.mapedQuestion(this.state.qna)}

                <a onClick={this.fetch} style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }}>Load More</a>

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
