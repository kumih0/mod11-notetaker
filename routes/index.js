// TODO: Import express
const express = require('express');
// TODO: Import modules for notes
const notesRouter = require('./notes');

// TODO: Create app variable to create an instance of express()
const app = express();

// TODO: Use our routes
app.use('/notes', notesRouter);

// TODO: Export app
module.exports = app;