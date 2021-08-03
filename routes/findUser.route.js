const express = require('express');
const bodyParser= require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
const client = require("../config")

const findUserController = require("../controllers/findUser.controller")
 
const params = {q: 'dmpmonte'};
app.get('/user', (req, res) => {
  client.get('users/search.json', params, findUserController) 
})

module.exports = app