const { getUserOverview, addTransaction, getUserTransaction, getAllUsers } = require("./helper");

class FinanceService {
  async fetchAllUsers () {
    return await getAllUsers();
   }
  async fetchUserOverview (username) {
   return await getUserOverview(username);
  }
  async fetchUserTransaction (username, transaction) {
    return await getUserTransaction(username, transaction);
   }
  async addNewTransaction (username, transaction, amount) {
    return await addTransaction(username, transaction, amount);
   }
}

module.exports = {
    FinanceService
};
