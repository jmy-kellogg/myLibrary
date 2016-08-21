var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var models = require('../models');
var Author = models.Author;
var Book = models.Book;
var Series = models.Series;
var Review = models.Review;
var db = models.db

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res, next){
	res.render('home')
}),
router.get('/books', function(req, res, next){
	res.render('books')
}),
router.get('/authors', function(req, res, next){
	res.render('authors')
}),
router.get('/about', function(req, res, next){
	res.render('about')
}),
router.get('/search', function(req, res, next){
	res.render('search')
}),

router.get('/add', function(req, res, next){
	res.render('addBook')
})

router.post('/', function(req, res, next){
	console.log(req.body);
	Book.create({
		title: req.body.title,
		type: req.body.type,
		genre: req.body.genre,
		year: req.body.year,
		synopsis: req.body.synopsis,
		tags: req.body.tags
	})
	.then(function(book){
		console.log("Your book has been added. Thank you");
		res.redirect('/')
	})
	.catch(next)
})
  

module.exports = router; 
