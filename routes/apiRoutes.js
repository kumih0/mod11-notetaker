const router = require('express').Router();
// import 
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
    //saving newnote obj created in store class addnote method to variable. addnote method writes in db.json file but returns the newnote obj
    const newNote =  new Store();

    newNote.addNote(req.body);

    //adding to json file w response obj as 
    const response = {
      status: 'u done it',
      body: req.body,
    }
    res.json(response);
  } else {
    res.json('what the heck r u doin! error in savin note!');
  }
});

module.exports = router;