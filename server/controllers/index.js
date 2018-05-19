var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let params = [req.body.username, req.body.message, req.body.roomname];
      
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log('error in controllers.messages.post');
        } else {
          console.log('hit callback in models, call from controller message method');
          res.json(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log(req.body);
    },
    post: function (req, res) {
      // var user = req.body.username;
      console.log('username from controller,', req.body.username);
      let params = [req.body.username];
      models.users.post(params, (err, results) => {
        // console.log('request being passed into models.users.post in controller', req.body);
        // console.log('Data in controllers post method, passed in from callback in models', data);
        if (err) {
          console.log('error in controllers.users.post');
        } else {
          // data = req.body.username;
          console.log('Hit callback in models, called from models user post');
          res.json(results);
        }
      });
    }
  }
};

