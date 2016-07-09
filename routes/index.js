var express = require('express');
var router = express.Router();

var summary = {
  name: "Justin Chan",
  tagline: "Software Craftsman"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({summary});
});

module.exports = router;
