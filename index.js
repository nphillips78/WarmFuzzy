const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('./database/db.js');

const server = express();
server.use(bodyParser.json());
server.use(cors());

const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`server listening to ${port}`);
});
