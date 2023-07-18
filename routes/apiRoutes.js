const router = require('express').Router();
// import store class
const Store = require('../helpers/store');


// GET Route for retrieving all saved notes
 router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
//using readfile method from store export to read db.json file and spit out the json parsed data
  const savedNotes = new Store().read();
  savedNotes.then((data) => res.json(JSON.parse(data)));
});

// POST Route for saving note
router.post('/notes', (req, res) => {
// Log that a POST request was received
  console.info(`${req.method} request received to save note`);

  // Destructuring assignment for the items in req.body
if (req.body.title || req.body.text) {
    //saving newnote obj created in store class addnote method to variable, addnote method writes in db.json file
    const newNote =  new Store();
    newNote.addNote(req.body);

    //adding to json file w response obj
    const response = {
      status: 'u done it',
      body: req.body,
    }
    res.json(response);
  } else {
    res.json('what the heck r u doin! error in savin note!');
  }
});

// DELETE Route for deleting note
router.delete('/notes/:note_id', async (req, res) => {
  // Log that a DELETE request was received
  console.info(`${req.method} request received to delete note`);
  const savedNotes = JSON.parse( await new Store().read());

//if there's a note with the req.params.id, delete it
  if(savedNotes.find((note) => note.note_id === req.params.note_id)) {
    //delete note method from store class, passing id from req params
    const updatedNotes = await new Store().deleteNote(req.params.note_id);
    //send back updated notes array
    res.status(200).json(updatedNotes);
  } else {
    res.json('no note with that id');
  }
});

module.exports = router;