var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function () {
      //
      // var sql = 'SELECT data FROM messages';
      // db.query(sql, )
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
      // var sql = 'SELECT data FROM messages';
      // db.query(sql,)      
    },
    post: function (params, callback) {
      //var sql = `insert into users (username) values ('${user}');`;
      // console.log('data in post users models', data);
      let queryStr = 'INSERT INTO users (username) values (?)';
      
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log('error');
        } else {
          console.log('results from model', results);
          callback(null, results);
        }
      });
      // get username
    }
  }
};

//module.exports.users.post('testUser1');