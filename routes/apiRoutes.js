// const express = require('express');
const router = require('express').Router();
//Store.addNote(req.body)
// import that sweet sweet store class
const { readFile, writeFile, Store } = require('../helpers/store');

// GET Route for retrieving all saved notes
 router.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
//using readfile method from store export to read db.json file and spit out the json parsed data
  Store.read().then((data) => res.json(JSON.parse(data)));
});

// POST Route for saving note
router.post('/api/notes', (req, res) => {
//   // Log that a POST request was received
  console.info(`${req.method} request received to save note`);

//   // Destructuring assignment for the items in req.body LOLLLLL I DON'T EVEN GOTTA DO THIS MESS YOOOOOOOOOOOOOO
//   const {  noteTitle, noteText } = req.body;

//   // If all the required properties are present
//   if (noteTitle && noteText) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//       notes_id: uuid(),
//     };

//     readAndAppend(newNote, './db/db.json');
if (req.body.title || req.body.text) {
    //saving newnote obj created in store class addnote method to variable. addnote method writes in db.json file but returns the newnote obj BOOM BABY
    const newNote = Store.addNote(req.body);

    const response = {
      status: 'u done it',
      body: newNote,
    }
    res.json(response);
  } else {
    res.json('what the heck r u doin! error in savin note!');
  }
});

module.exports = router;