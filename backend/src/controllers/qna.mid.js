
const qnaModel = require('../models/qna.model');

const postQ = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { question, productId } = req.body;
        console.log(question, productId);

        await qnaModel.create({ question, answer: '', productId, seller: user.gId, user: { gId: user.gId, fullName: user.fullName } })
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured while posting question', err });
    }

}

const postA = async (req, res, next) => {
    try {

        // Find if the product is under this seller
        const { answer, qnaId } = req.body;

        await qnaModel.findOneAndUpdate({ _id: qnaId }, { answer });
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured while posting answer', err });
    }
}

const get = async (req, res, next) => {
    try {
        const { page, productId } = req.query;
        console.log(page, productId);

        const qna = await qnaModel.find({ productId }).skip(page * 10).limit(10).sort('timeStamp').lean();
        res.status(200).send(qna);

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured while getting qna', err });
    }
}

const getPendingQuestions = async (req, res) => {
    try {
        const { user } = req.app.locals;
        console.log(user.gId);
        const questions = await qnaModel.find({ seller: user.gId, answer: "" }).sort('timeStamp');
        res.status(200).send(questions);

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured while getting pending questions', err });
    }
}

module.exports = { postQ, postA, get, getPendingQuestions };
