'use strict';
const mysql = require('mysql');

const db = mysql.createPool({
  host: "us-cdbr-east-02.cleardb.com",
  user: "bf7d7ecfe273f2",
  password: "784edab8",
  database: "heroku_438b6608acc59dd"
});

module.exports = db