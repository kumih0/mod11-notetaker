const notes = require('express').Router();

// Helper function to generate unique ids
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/store');

// GET Route for retrieving all saved active notes
 notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for saving note
notes.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to save note`);

  // Destructuring assignment for the items in req.body
  const {  noteTitle, noteText } = req.body;

  // If all the required properties are present
  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      notes_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    }
    res.json(response);
  } else {
    res.json('Error in saving note');
  }
});

module.exports = notes;