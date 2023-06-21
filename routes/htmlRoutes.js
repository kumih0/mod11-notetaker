const express = require('express');
// const app = express(); don't need this with the router method from express npm
const router = require('express').Router();
const path = require('path');


//GET /notes -> sends note.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'), (err) => err ? console.log(err, 'u broke it no notes') : console.log('u done it'));
});

//GET * -> sends index.html file
// router.get('////', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'), (err) => err ? console.log(err, 'u broke it u dummy') : console.log('u did it'));
// });

//export html files
module.exports = router;