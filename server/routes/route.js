var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var models = require('../db/models/library.js');
var db = require('../db')
var Book = models.Book;
var Author = models.Author;
var Series = models.Series;
var Review = models.Review;
// var db = require('../db');
// var Book = db.model('book');
// var Author = db.model('author');
// var Series = db.model('series');
// var Review = db.model('book');



// router.get('/', function(req, res, next){
// 	res.render()
// 	Book.findAll()
// 		.then(function(books){
// 			res.json(books)
// 		})
// 		.catch(next)
// }),
router.get('/books', function (req, res, next) {
  Book.findAll({ where: req.query })
 	 .then(books => res.json(books))
  	.catch(function (data) {
  		next(data)
  	});
});
// router.get('/books', function(req, res, next){
// 	Book.findAll()
// 	.then(books => res.json(books)
// 	})
// }),
router.get('/authors', function(req, res, next){
	Author.findAll({ where: req.query})
		.then(authors => res.json(authors))
		.catch(next);
	})
// }),
// router.get('/about', function(req, res, next){
// 	res.render('about')
// }),
// router.get('/search', function(req, res, next){
// 	res.render('search')
// }),

// router.get('/add', function(req, res, next){
// 	res.render('addBook')
// })
router.put('/', function(req, res, next){
	console.log('updated');
	Book.update({
		title: "Hello"
	},{ where: {id: 1 } })
	.spread (function(count, books){
		console.log("count", count);
		console.log('books', books)
	})
})

router.post('/add', function(req, res, next){
	Author.findOrCreate({
		where:{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			bio: req.body.bio,
			links: req.body.links
		}
	})
	.spread(function(author, wasCreatedBool){
		return Book.create({
			title: req.body.title,
			type: req.body.type,
			genre: req.body.genre,
			year: req.body.year,
			synopsis: req.body.synopsis,
			picture: req.body.picture,
			tags: req.body.tags
		})
		.then(function(book){
			return book.setAuthor(author);
		})
	})
	.then(function(book){
		console.log("Your book has been added. Thank you");
		res.redirect('/')
	})
	.catch(next)
})
  

module.exports = router; 
