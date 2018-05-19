var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
/* 
uses mysql npm module

*/
let dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect((err, data) => { console.log('running from dbConnection'); });

module.exports = dbConnection;

