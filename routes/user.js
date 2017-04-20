var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function(req, res, next) {
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    })
    user.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(201).json({
        message: 'User created',
        obj: result
      })
    })
});

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login credentials failed',
        error: {message: 'Incorrect Login Info'}
      })
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login credentials failed',
        error: {message: 'Incorrect Login Info'}
      })
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 14400});
    res.status(200).json({
      message: 'Successfully Logged In!',
      token: token,
      userId: user._id,
      userName: user.firstName
    })
  })
})

router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'An error occured',
        error: err
      })
    }
    next();
  })
})

router.post('/address', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    if (!user) {
      return res.status(500).json({
        title: 'User not found',
        error: {message: 'No user found!'}
      })
    }
    user.address1 = req.body.address1;
    user.address2 = req.body.address2;
    user.city = req.body.city;
    user.state = req.body.state;
    user.zip = req.body.zip;
    user.country = req.body.country;
    user.save(function(err, updated) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        title: "User updated",
        obj: updated
      })
    })
  })
})


module.exports = router;
