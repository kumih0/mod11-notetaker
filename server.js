const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//importing the htmlroutes
const routes = require('./routes');
// Import the router and api routes
const api = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);
// Send all the requests that begin with /api to the apiroutes.js in the routes folder
app.use('/api', api);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
