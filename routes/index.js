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
  { name: "Color Crush", github_link: "https://justchan.github.io/Project_1B", 
    heroku_link: "https://afternoon-savannah-34323.herokuapp.com/" }, 
  { name: "Weird Pokemon Wiki", github_link: "https://justchan.github.io/Project_1B", 
    heroku_link: "https://afternoon-savannah-34323.herokuapp.com/"} 
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


/* GET projects/:id */
router.get('/projects/:id', function(req, res, next) {
  var id=parseInt(req.params.id)
  if(id > 0 && id <= projects.length+1) {
    var project = projects[id - 1];
    res.status(200).json({project});
  } else {
    res.status(422).json({message: "ID out of range."});
  }
});

module.exports = router;
