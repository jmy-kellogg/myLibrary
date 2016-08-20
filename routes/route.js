const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
var bodyParser = require('body-parser');
var models = require('../models');
var Author = models.Author;
var Book = models.Book;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res, next){
	res.render('home')
}),

router.get('/add', function(req, res, next){
	res.render('addBook')
})

router.post('/book', function(req, res, next){
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
		res.render("You book has been added. Thank you")
	})
	.catch(next)
	// Author.findOrCreate({
	// 	name: req.body.name
	// })
	// .then(function(values){
	// 	var author = values[0];
	
	// 	var book = Book.build({
	// 		title: req.body.title,
	// 		type: req.body.type,
	// 		genre: req.body.genre,
	// 		year: req.body.year,
	// 		synopsis: req.body.synopsis,
	// 		tags: req.body.tags
	// 	});
	// 	return book.save()
	// 		.then(function (book) {
 //   	 		return book.setAuthor(author);
	// 	});
	// })
	// .then(function (book) {
 //  		res.redirect('/');
	// })
	// .catch(next);
})
  

module.exports = router; 
