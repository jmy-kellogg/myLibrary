var chalk = require('chalk');

var db = require('./server/db');
var models = require('./server/db/models/library.js');
var Book = models.Book;
var Author = models.Author;
var Series = models.Series;
var Review = models.Review;
// var db = require('./server/db');

var app = require('./server/app');
var server = require('http').createServer();


models.Author.sync( /*{force: true}*/ )
    .then(function() {
        return models.Series.sync( /*{force: true}*/ )
    })
    .then(function() {
        return models.Book.sync( /*{force: true}*/ )
    })
    .then(function() {
        return models.Review.sync( /*{force: true}*/ )
    })
    .then(function() {
        app.listen(3003, function() {
            console.log('Server is listening on port 3003!');
        });
    })
    .catch(console.error);

// db.sync()
// .then(function () {
//   server.on('request', app);
// })
// .then(function () {
//   var PORT = 1337;
//   server.listen(PORT, function () {
//     console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
//   });
// })
// .catch(function (err) {
//   console.error(chalk.red(err.stack));
// })
