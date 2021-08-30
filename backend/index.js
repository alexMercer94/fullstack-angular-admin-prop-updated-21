const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Create server
const app = express();

// Setting up cors
app.use(cors());

// BD
dbConnection();

// Routes
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola',
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server starred on port', process.env.PORT);
});
