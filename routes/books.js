var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Book = require('../models/book');
var User = require('../models/user');


router.get('/', function(req, res, next) {
  Book.find()
  .populate('user', 'firstName')
  .exec(function(err, books) {
    if (err) {
      return res.status(500).json({
        title: "An error occured",
        error: err
      })
    }
    res.status(200).json({
      title: "books found!",
      obj: books
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

router.delete('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  Book.findById(req.params.id, function(err, book) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    if (!book) {
      return res.status(500).json({
        title: 'No book found',
        error: {message: 'This book not found'}
      })
    }
    if (book.user != decoded.user._id) {
      return res.status(401).json({
        title: 'Not Authenticated',
        message: 'This user is not authenticated'
      })
    }
    User.findById(book.user, function(err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      user.books.pull(book);
      user.save();
    })
    book.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        message: 'Book deleted',
        obj: result
      })
    })
  })
})

router.get('/mybooks', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    books = user.books
    Book.find()
      .where('_id')
      .in(books)
      .exec(function (err, Books) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        }
        res.status(200).json({
          message: 'Success',
          obj: Books
        })
      })
    })
  })

router.post('/', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    var book = new Book({
      title: req.body.title,
      author: req.body.author,
      image: req.body.image,
      description: req.body.description,
      user: user
    })
    book.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      user.books.push(result);
      user.save();
      res.status(201).json({
        message: 'Book added',
        obj: result
      })
    })
  })
})



module.exports = router;
