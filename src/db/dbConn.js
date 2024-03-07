var mysql      = require('mysql');

var connection = mysql.createConnection({
    // host     : 'localhost',
    // user     : 'root',
    // password : '',
    // database : 'sql6687853'
    host     : 'sql6.freemysqlhosting.net',
    user     : 'sql6687853',
    password : 'GFhwzE2hVa',
    database : 'sql6687853'
  });

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  
  module.exports.connection = connection;
