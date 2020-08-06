import React from 'react';

import { Modal, Input, Button, Card } from 'antd';
import { mainHttp } from '../../../Axios/Axios';

class AnswerQuestionModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            qna: [
            ]
        }
    }

    componentDidMount() {
        this.fetch();
    }

    async fetch() {
        try {
            const questions = await mainHttp.get('/qna/questions/pending');
            console.log(questions)
            this.setState({ ...this.state, qna: [...questions.data] });
        } catch (err) {
            alert('Error Occured while getting the pending questions');
        }
    }

    submit = async (index) => {
        try {
            await mainHttp.post('qna/answer', { answer: this.state.qna[index].answer, qnaId: this.state.qna[index]._id })
            let newArr = [...this.state.qna]
            newArr.splice(index, 1);
            this.setState({ ...this.state, qna: [...newArr] });
        } catch (err) {
            console.log(err);
        }
    }

    handleAns(event, index) {
        var newArr = [...this.state.qna];
        newArr[index].answer = event.target.value;
        this.setState({...this.state, qna: [...newArr]});
    }


    render() {

        const mapedQuestions = this.state.qna.map((item, index) => {
            return (

                <Card key={index} style={{ margin: '10px 0' }}>
                    <strong style={{ margin: '10px 0' }}> {index + 1 + '. ' + item.question} </strong>
                    <div style={{ height: '20px' }}></div>
                    <Input.TextArea row='4' placeholder='Answer' onChange={(e) => this.handleAns(e, index)} value={item.answer} />
                    <div style={{ height: '20px' }}></div>
                    <p style={{ fontSize: '10px', fontWeight: 500 }}>By {item.user.fullName} at {item.timeStamp}</p>
                    <p style={{fontSize: '10px', fontWeight: 500}}>{ 'product id : ' + item.productId}</p>
                    <Button onClick={() => this.submit(index)} style={{ margin: '10px 0', float: 'right' }} type='primary'>Submit</Button>
                </Card>

            )
        });

        return (
            <Modal
                title={this.state.qna.length + ' Pending Questions'}
                visible={this.props.isVisible}
                onOk={this.handleOk}
                onCancel={() => this.props.$toggleModal('AnswerQuestions', false)}>
                <div style={{ maxHeight: '300px', overflow: 'scroll' }} >
                    {mapedQuestions}
                </div>

            </Modal>
        )
    }
}

export default AnswerQuestionModal;
