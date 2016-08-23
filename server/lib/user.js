var user = require('../models').user;

module.exports = {
  //get a list of all users using model.findAll()
  index(req, res) {
    user.findAll()
      .then(function(users) {
        res.status(200).json(users)
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  //get a user by the unique id using model.findById()
  show(req, res) {
    user.findById(req.params.id)
      .then(function(user) {
        res.status(200).json(user);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  //create a new user using model.create()
  create(req, res) {
    console.log(req.body);
    user.create(req.body)
      .then(function(newUser) {
        res.status(200).json(newUser);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  //edit an existing user's details using model.update()
  update(req, res) {
    user.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(updatedRecords) {
        res.status(200).json(updatedRecords);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  //delete an existing user by the unique id using model.destroy()
  delete(req, res) {
    user.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (deletedRecords) {
        res.status(200).json(deletedRecords);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  }
};