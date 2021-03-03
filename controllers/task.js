const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  post: (req, res) => {
    const data = JSON.parse(JSON.stringify(req.body));
    console.log(data);
    let sql = `INSERT INTO SCORE (Email, ScoreF, ScoreT) VALUES ('${data.email}', ${data.score1}, ${data.score2})`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
};
