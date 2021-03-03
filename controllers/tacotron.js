const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM Domains WHERE ID = 2'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}