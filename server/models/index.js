var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'SELECT messages.id, messages.text, messages.roomname FROM messages left outer join users on (messages.userid = users.id) order by messages.id desc';
      db.query(queryStr, function(err, results) {
        if (err) {
          console.log('error in get, models');
        } else {
          callback(null, results); 
        }
      });
    }, // a functizon which produces all the messages
    post: function (params, callback) {
      console.log(params);
      let queryStr = 'INSERT INTO messages (userid, text, roomname) values ((SELECT id FROM users WHERE username = ? limit 1), ?, ?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('error in post - messages models');
        } else {
          callback(null, results);
        }
      });
      console.log(params);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log('error', null);
        } else {
          console.log(results);
          callback(null, results);
        }
      });
    },
    post: function (params, callback) {
      //var sql = `insert into users (username) values ('${user}');`;
      // console.log('data in post users models', data);
      let queryStr = 'INSERT INTO users (username) values (?)';
      
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('error');
        } else {
          callback(null, results);
        }
      });
      // get username
    }
  }
};

//module.exports.users.post('testUser1');