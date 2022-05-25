
const expenseModel = require('../models/expenseModel')


const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


//-------------This function will help to create the college -----------
const createexpenses = async function (req, res) {
    try {
        const requestBody = req.body;
        const { title, amount } = requestBody

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, msg: "Plz enter college details" })
            return
        }

        if (!isValid(title)) {
            res.status(400).send({ status: false, msg: "Plz enter College abbreviate title" })
            return
        }
        if (!isValid(amount)) {
            res.status(400).send({ status: false, msg: "Plz enter College amount" })
            return
        }
        



        if (requestBody) {
            let savedexpense = await expenseModel.create(requestBody)
            res.status(201).send({ status: true, data: { savedexpense } })
        }
        else {
            res.status(400).send({ status: false, msg: "enter valid data" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
}
//-------------This function will help to get the college details with interndetails -----------
const getexpenses = async function (req, res) {
    try {

        let foundexpenses = await expenseModel.find().select({ "_id": 1, "title": 1, "amount": 1, "Date": 1 })



        if (foundexpenses) {
            res.status(200).send({ status: true, data: { foundexpenses } });
        }
        else {
            res.status(404).send({ status: false, msg: "No documents found" });
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
}

module.exports.createexpenses = createexpenses
module.exports.getexpenses = getexpenses
