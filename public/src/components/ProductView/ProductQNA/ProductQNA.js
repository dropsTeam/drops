import React from 'react';

import QNA from './QNA/QNA';
import { Form, Modal, Input, message, Empty } from 'antd';
import { mainHttp } from '../../../Axios/Axios';

class ProductQNA extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            qnaModelVis: false,
            qna: [],
            qnaForm: {
                question: ''
            },
            page: 0
        }

        this.fetch = this.fetch.bind(this);
    }

    async fetch() {
        try {
            const qna = await mainHttp.get(`/qna?productId=${this.props.productId}&page=${this.state.page}`);
            if (qna.data.length === 0) {
                message.error('No Questions to load.');
                return;
            }

            const newArr = [...this.state.qna].concat(qna.data);

            this.setState((stateSnapshot, propsSnapshat) => {
                return {
                    ...stateSnapshot,
                    qna: [...newArr],
                    page: stateSnapshot.page + 1
                }
            });

        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetch();
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
            newArr.unshift({ question: this.state.qnaForm.question, answer: '', timeStamp: new Date().getDate(), user: { fullName: 'you' } });
            this.setState({ ...this.state, qna: newArr });
        } catch (err) {
            alert('Error Occured submitting the question.')
        }

    }

    render() {

        const mapedQuestion = this.state.qna.map((item, index) => {
            return (
                <QNA key={Math.random()} question={item.question} fullName={item.user.fullName} answer={item.answer} timeStamp={item.timeStamp} />
            )
        })


        return (
            <React.Fragment>
                <h3>Questions and Answers <button className='btn btn-primary btn-sm float-right' onClick={() => this.togglePostModal(true)} >Ask A Question</button> </h3>
                <hr />

                {(this.state.qna.length === 0) ? <Empty /> :  mapedQuestion }


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
