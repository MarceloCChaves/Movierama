const express = require('express');
const api = express();
var cors = require('cors');

const routes = require('./routes/router');

api.use(cors());

const PORT = 3000;

api.use(express.json());
api.use(routes);

api.listen(PORT);

console.log(`API is running on PORT ${PORT}`)