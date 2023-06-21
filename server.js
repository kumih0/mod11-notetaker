const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//importing the htmlroutes
const html = require('./routes/htmlroutes');
// Import the router and api routes
const api = require('./routes/apiroutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Send all the requests that begin with /api to the apiroutes.js in the routes folder
app.use('/api', api);
// app.use('/*', html);

// // This view route is a GET route for the homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // This view route is a GET route for the notes page
// app.get('/api/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
