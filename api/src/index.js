const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const config = require('./db');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
	res.status(200).send('OK')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3001, () => {
  console.log('Example app listening on port 8000!')
});