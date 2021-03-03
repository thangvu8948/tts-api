const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

const port = process.env.PORT || 3889
require('dotenv').config({path:'.env'});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
let routes = require('./routes') //importing route

routes(app)

app.listen(port)

console.log('RESTful API server started on: ' + port)
console.log('RESTful API server started on: ' + process.env.DB_HOST)

module.exports = app;