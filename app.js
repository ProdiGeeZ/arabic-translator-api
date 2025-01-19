const express = require('express');
/**
 * Importing specific functions from the translations.controller module.
 * 
 * @module app
 * @requires ./controllers/translations.controller
 * 
 * @const {Function} getHelloWorld - Function to get a "Hello World" message.
 * @const {Function} getBooks - Function to get a list of books.
 */
const { getHelloWorld, getBooks } = require('./controllers/translations.controller');

const app = express();
app.use(express.json());

app.get('/', getHelloWorld);
app.get('/api/books', getBooks);


module.exports = app;