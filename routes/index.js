var express = require('express');
var router = express.Router();

var summary = {
  name: "Justin Chan",
  tagline: "Software Craftsman",
  statement: "Crafting elegant solutions"
}

/* GET / - default */
router.get('/', function(req, res, next) {
  res.status(200).json({summary});
});

/* GET profile statement */
router.get('/profile', function(req, res, next) {
  res.status(200).json( { summary: {statement: summary.statement} });
});

module.exports = router;
