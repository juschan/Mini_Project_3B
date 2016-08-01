require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Oneself = require('./models/oneself');
const ejs = require('ejs')
const port = process.env.PORT || 3000

var routes = require('./routes/index');

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)

var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, email, auth_token, id')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  next()
})

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log("Listening on port: " + process.env.PORT)
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
});



var oneself1 = new Oneself({ 
    summary: {
      name: "Justin Chan",
      tagline: "Software Craftsman",
      statement: "Crafting elegant solutions"
    },
    links: [
  { name: "Github Profile", link: "https://github.com/juschan" }, 
  { name: "Facebook Profile", link: "https://www.facebook.com/justinchanuk"} 
],
    projects: [
  { name: "Color Crush", github_link: "https://juschan.github.io/Project_1B", 
    heroku_link: "https://afternoon-savannah-34323.herokuapp.com/" }, 
  { name: "Weird Pokemon Wiki", github_link: "https://juschan.github.io/Project_1B", 
    heroku_link: "https://afternoon-savannah-34323.herokuapp.com/"} 
],
    skills:  [
  { name: "Javascript", score: 5 }, 
  { name: "HTML", score: 4 }, 
  { name: "CSS", score: 4 }, 
  { name: "Ruby on Rails", score: 4 },
  { name: "SQL", score: 4 },
  { name: "C", score: 4 } 
]
});

Oneself.find().remove()
oneself1.save();

module.exports = app;
