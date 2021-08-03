//const serverless = require('serverless-http');
const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./routes/findUser.route'))

app.use(require('./routes/findTimeline.route'))

app.listen(3000, function() {
  console.log('escuchando el puerto 3000!');
});
