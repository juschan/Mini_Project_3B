var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
var Oneself = require('../models/oneself');
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET / - default route showing landing page
router.get('/', function(req, res, next) {
  res.render('../views/index.ejs')
});


// GET /summary - shows summary 
router.get('/summary', function(req, res, next) {
  res.status(200).json( {summary: "text"});
});

// GET /links
router.get('/links', function(req, res, next) {
  res.status(200).json( {links} );
});

// GET projects
router.get('/projects', function(req, res, next) {
  res.status(200).json( {projects} );
});


// GET projects/:id */
router.get('/projects/:id', function(req, res, next) {
  var id=parseInt(req.params.id)
  if(id > 0 && id <= projects.length+1) {
    var project = projects[id - 1];
    res.status(200).json({project});
  } else {
    res.status(422).json({message: "ID out of range."});
  }
});


// GET skills
router.get('/skills', function(req, res, next) {
  res.status(200).json( {skills});
});



module.exports = router;
