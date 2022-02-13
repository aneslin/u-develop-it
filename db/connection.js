const mysql = require('mysql2')

const db = mysql.createConnection(
    {host:'localhost',
     user: 'udevelop',
    password: 'udevelopit99',
    database: "election"

});
   

module.exports= db