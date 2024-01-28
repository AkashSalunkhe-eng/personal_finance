const express = require('express');
const financeRoutes = require("./routes");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
financeRoutes(app);
app.listen(port = 8002, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = {app};