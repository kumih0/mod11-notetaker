//import express router and path
const router = require('express').Router();
const path = require('path');

//GET /notes -> sends note.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'), (err) => err ? console.log(err, 'u broke it no notes') : console.log('u done it'));
});

//export html files
module.exports = router;