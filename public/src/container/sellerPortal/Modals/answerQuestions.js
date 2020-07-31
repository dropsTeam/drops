import React from 'react';
import { Modal, Input, Button } from 'antd';

class AnswerQuestionModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            qna: [
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
                {
                    question: 'dwd',
                    answer: 'dedw'
                },
            ]
        }
    }


    render() {

        const mapedQuestions = this.state.qna.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <p> {index + 1 + ' ' + item.question} </p>
                    <Input.TextArea row={4} placeholder='Answer' value={item.answer} />
                    <Button style={{ margin: '10px 0', float: 'right', overflow: 'hidden' }} type='primary'>Submit</Button>

                </React.Fragment>
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
