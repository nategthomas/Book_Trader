var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Book = require('../models/book');
var User = require('../models/user');
var Trade = require('../models/trade');


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

router.post('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    Book.findById(req.params.id, function(err, book) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!book) {
        return res.status(500).json({
          title: 'Book not found',
          error: err
        })
      }
      var trade = new Trade({
        sender: user,
        receiver: book.user,
        book: book
      })
      trade.save();
      user.sentRequests.push(trade);
      user.save();
      User.findById(book.user, function(err, receivingUser) {
        if (err) {
          return res.status(500).json({
            title: 'error occured',
            error: err
          })
        }
        if (!receivingUser) {
          return res.status(500).json({
            title: 'user not found',
            error: err
          })
        }
        receivingUser.receivedRequests.push(trade);
        receivingUser.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'failed to save receiving user',
              error: err
            })
          }
          res.status(200).json({
            title: 'trade request sent',
            obj: trade
          })
        })
      })
    })
  })
})

router.get('/', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    sentRequests = user.sentRequests
    Trade.find()
      .where('_id')
      .in(sentRequests)
      .populate('book')
      .populate('receiver')
      .exec(function (err, Trades) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        }
        res.status(200).json({
          message: 'Success',
          obj: Trades
        })
      })
    })
})

router.get('/received', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    receivedRequests = user.receivedRequests;
    Trade.find()
      .where('_id')
      .in(receivedRequests)
      .populate('book')
      .populate('sender', 'firstName')
      .exec(function (err, Trades) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        }
        res.status(200).json({
          message: 'Success',
          obj: Trades
        })
      })
    })
})

router.delete('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    Trade.findById(req.params.id, function(err, trade) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!trade) {
        return res.status(500).json({
          title: 'Trade not found',
          error: err
        })
      }
      user.sentRequests.remove(trade);
      user.save();
      User.findById(trade.receiver, function(err, receivingUser) {
        if (err) {
          return res.status(500).json({
            title: 'error occured',
            error: err
          })
        }
        if (!receivingUser) {
          return res.status(500).json({
            title: 'user not found',
            error: err
          })
        }
        receivingUser.receivedRequests.pull(trade);
        trade.remove();
        receivingUser.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'failed to save receiving user',
              error: err
            })
          }
          res.status(200).json({
            title: 'request canceled',
            message: result
          })
        })
      })
    })
  })
})


router.delete('/reject/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    Trade.findById(req.params.id, function(err, trade) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!trade) {
        return res.status(500).json({
          title: 'Trade not found',
          error: err
        })
      }
      user.receivedRequests.remove(trade);
      user.save();
      User.findById(trade.sender, function(err, sendingUser) {
        if (err) {
          return res.status(500).json({
            title: 'error occured',
            error: err
          })
        }
        if (!sendingUser) {
          return res.status(500).json({
            title: 'user not found',
            error: err
          })
        }
        sendingUser.sentRequests.pull(trade);
        trade.remove();
        sendingUser.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'failed to save sending user',
              error: err
            })
          }
          res.status(200).json({
            title: 'request rejected',
            message: result
          })
        })
      })
    })
  })
})


router.patch('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    Trade.findById(req.params.id, function(err, trade) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!trade) {
        return res.status(500).json({
          title: 'Trade not found',
          error: err
        })
      }
      user.receivedRequests.remove(trade);
      user.books.pull(trade.book);
      user.save();
      User.findById(trade.sender, function(err, sendingUser) {
        if (err) {
          return res.status(500).json({
            title: 'error occured',
            error: err
          })
        }
        if (!sendingUser) {
          return res.status(500).json({
            title: 'user not found',
            error: err
          })
        }
        sendingUser.sentRequests.pull(trade);
        sendingUser.books.push(trade.book);
        trade.remove();
        sendingUser.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'failed to save sending user',
              error: err
            })
          }
          res.status(200).json({
            title: 'request rejected',
            message: result
          })
        })
      })
    })
  })
})


module.exports = router;
