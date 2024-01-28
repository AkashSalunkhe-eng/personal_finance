const { FinanceService } = require("./service");
const _ = require("lodash");

const getAllUsers = async (req, res) => {
    try {
        const financeService = new FinanceService();
        const result = await financeService.fetchAllUsers();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

const getUserOverview = async (req, res) => {
    try {
        const { username } = req.params;
        if(_.isEmpty(username)) return res.send({message: 'Username cannot be empty'});
        const financeService = new FinanceService();
        const result = await financeService.fetchUserOverview(username);

        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

const getTransactionHistory = async (req, res) => {
    try {
        const { username, transaction } = req.params;
        if(_.isEmpty(username)) return res.send({message: 'Username cannot be empty'});
        if(_.isEmpty(transaction)) return res.send({message: 'Transaction cannot be empty'});
        const financeService = new FinanceService();
        const result = await financeService.fetchUserTransaction(username, transaction);

        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

const addNewTranasaction = async (req, res) => {
    try {
        const { username, transaction, amount } = req.body;
        if(_.isEmpty(username)) return res.send({message: 'Username cannot be empty'});
        if(_.isEmpty(transaction)) return res.send({message: 'Transaction cannot be empty'});
        if(_.isEmpty(amount)) return res.send({message: 'Amount cannot be empty'});
        const financeService = new FinanceService();
        await financeService.addNewTransaction(username, transaction, amount);

        res.send("Successfully added transaction");
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getAllUsers,
    getUserOverview,
    getTransactionHistory,
    addNewTranasaction
}