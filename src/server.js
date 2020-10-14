const express = require('express');
const cors = require('cors');
//const config = require('./config');
const { user } = require('./helper');

const app = express();

app.use(cors());

app.get('/user/:id', user);

app.get('*', (request, response) => {
  response.status(404).send('Route not found');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Node-server start to listen on port 8080..`);
});