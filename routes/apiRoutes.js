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
 try{
  // Log that a DELETE request was received
  console.info(`${req.method} request received to delete note`);
  const deleteNote = (note_id) => {
    //grabbing the array of notes
    const savedNotes = JSON.parse( new Store().read());
    //looping through the array
    savedNotes.forEach((note, index) => {
      //if the note id matches the id from the req params, splice it out of the array
      if (note.note_id === note_id) {
        savedNotes.splice(index, 1);
      }
    });
    //write the new array to the db.json file
    new Store().write(savedNotes);
    //return the new array
    return savedNotes;
  }
  const savedNotes = await deleteNote();
  res.json(savedNotes);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;