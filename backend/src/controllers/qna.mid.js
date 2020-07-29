
const qnaModel = require('../models/qna.model');

const postQ = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { question, productId } = req.body;
        console.log(question, productId);

        await qnaModel.create({ question, answer:'', productId, user: { gId: user.gId, fullName: user.fullName } })
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured while posting question', err });
    }

}

const postA = async (req, res, next) => {
    try {

        // Find if the product is under this seller
        const { answer, productId } = req.body;

        await qnaModel.findOneAndUpdate({ productId }, { answer });
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


module.exports = { postQ, postA, get };
