
const { createPool } = require("mysql2");

const pool = createPool({
    host: "localhost",
    user: "root",
    password:"root",
    database: "personal_finance",
    connectionLimit: "10"
});

async function getAllUsers() {
    const query = `SELECT * FROM personal_finance`;
        const [rows] = await pool.promise().query(query);
        console.log(rows, "rowss");
        return rows;
}

async function getUserOverview(username) {
    const query = `SELECT * FROM personal_finance where username = '${username}'`;
        const [rows] = await pool.promise().query(query);
        return rows;
}

async function getUserTransaction(username, transaction) {
    const query = `SELECT * FROM personal_finance where username = '${username}' AND transaction = '${transaction}'`;
        const [rows] = await pool.promise().query(query);
        return rows;
}

async function addTransaction(username, transaction, amount) {
    const query = `INSERT INTO personal_finance (username, transaction, amount) VALUES
    ('${username}', '${transaction}', '${amount}')`;
    await pool.promise().query(query);
}

module.exports = {
    getAllUsers,
    getUserOverview,
    getUserTransaction,
    addTransaction
}