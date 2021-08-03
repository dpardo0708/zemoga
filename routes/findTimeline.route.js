const express = require('express');
const bodyParser= require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
const client = require("../config")

const findUserTimeLine = require("../controllers/findTimeline.controller")
 

app.get('/timeline', (req, res) => {  
  client.get('statuses/user_timeline',findUserTimeLine )
})

module.exports = app