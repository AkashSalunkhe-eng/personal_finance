const { getUserOverview, addNewTranasaction, getTransactionHistory, getAllUsers } = require("./controller")

module.exports = (app) => {
    app.get('/allusers', getAllUsers);
    app.get('/user-overview/:username', getUserOverview);
    app.get('/user-transaction-history/:username/:transaction', getTransactionHistory);
    app.post('/add-new-transaction' , addNewTranasaction);
}