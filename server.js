const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//importing the htmlroutes
const path = require('path');
const html = require('./routes/htmlRoutes');
// Import the router and api routes
const api = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Send all the requests that begin with /api to the apiroutes.js in the routes folder
app.use('/api', api);
app.use('/*', html);
// // GET /notes -> sends note.html file
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// // GET * -> sends index.html file
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
