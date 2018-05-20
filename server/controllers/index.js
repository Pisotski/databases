var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let params = [req.body.username, req.body.message, req.body.roomname];
      
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log('error in controllers.messages.post');
        } else {
          res.json(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          console.log('some shit');
        } else {
          console.log(results);
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      // var user = req.body.username;
      let params = [req.body.username];
      models.users.post(params, (err, results) => {
        // console.log('request being passed into models.users.post in controller', req.body);
        // console.log('Data in controllers post method, passed in from callback in models', data);
        if (err) {
          console.log('error in controllers.users.post');
        } else {
          // data = req.body.username;
          res.json(results);
        }
      });
    }
  }
};

