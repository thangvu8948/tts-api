const { json } = require("express");
var express = require("express");
let router = express.Router();

module.exports = function (app) {
  let fastspeech = require('./controllers/fastspeech');
  let tacotron = require('./controllers/tacotron')
  // todoList Routes
  app.route('/')
    .get((req, res) => res.json("Hello world"))

  app.route('/fastspeech2')
    .get(fastspeech.get)
  app.route('/tacotron2').get(tacotron.get)
};