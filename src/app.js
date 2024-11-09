const express = require('express');

const cors = require('cors');

const router = require('./routes/router.js');

const app = express();

// app.use(
//     cors({
//         // origin: 'http://localhost:3000',
//     })
// );

app.use(express.json());

app.use(router);

module.exports = app;
