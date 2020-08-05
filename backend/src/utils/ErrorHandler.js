
const errorHandler = (res, status, msg) => {
    return res.status(status).send({ msg });
}

module.exports = { errorHandler }
