const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const usersRoutes = require('./api/routes/users');
const contactsRoutes = require('./api/routes/contacts');

mongoose.connect(
    'mongodb+srv://admin:admin@contacts-manager-3dbsh.azure.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use('/contacts', contactsRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: { message: error.message }
    });
});

module.exports = app;
