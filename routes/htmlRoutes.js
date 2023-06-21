const router = require('express').Router();
const path = require('path');
// const express = require('express');
// const app = express(); don't need this with the router method from express npm

//GET /notes -> sends note.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//GET * -> sends index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//export html files
module.exports = router;