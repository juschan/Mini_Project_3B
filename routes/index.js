var express = require('express');
var router = express.Router();

var summary = {
  name: "Justin Chan",
  tagline: "Software Craftsman",
  statement: "Crafting elegant solutions"
};

var links = [
  { name: "Github Profile", link: "https://github.com/juschan" }, 
  { name: "Facebook Profile", link: "https://www.facebook.com/justinchanuk"} 
];

var projects = [
  { name: "Color Crush", link: "https://justchan.github.io/Project_1B" }, 
  { name: "Weird Pokemon Wiki", link: "https://afternoon-savannah-34323.herokuapp.com/"} 
];

/* GET / - default */
router.get('/', function(req, res, next) {
  res.status(200).json({summary});
});

/* GET profile statement */
router.get('/profile', function(req, res, next) {
  res.status(200).json( { summary: {statement: summary.statement} });
});

/* GET links */
router.get('/links', function(req, res, next) {
  res.status(200).json( {links} );
});

/* GET projects */
router.get('/projects', function(req, res, next) {
  res.status(200).json( {projects} );
});

module.exports = router;
