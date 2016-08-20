var express = require('express');
var app = express();
var logging = require('morgan');
var router = require('./routes/route');
var models = require('./models');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');


//middleware logger
app.use(logging('dev'));

//body-parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/', router);

//static folders
app.use(express.static(path.join(__dirname, '/public')));

//swig
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

//scss
// app.use(express.favicon());
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());

// statically serve front-end dependencies
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// failed to catch req above means 404, forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle any errors
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

models.Series.sync({force: true})
.then(function () {
    return models.Author.sync({force: true})
})
.then(function () {
    return models.Review.sync({force: true})
})
.then(function () {
    return models.Book.sync({force: true})
})
.then(function () {
    app.listen(3003, function () {
        console.log('Server is listening on port 3003!');
    });
})
.catch(console.error);
