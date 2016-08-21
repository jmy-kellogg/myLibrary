// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var models = require('./models');
var db = models.db
var Book = models.Book;
var Author = models.Author;
var Series = models.Series;
var Review = models.Review;

var data = {
  book: [
    {title: "The Hobbit", type: "fiction", genre: "Fantasy", year: 1937, synopsis: "This is the prequel to the Lord of the Rings is about Bilbo Baggins. This adventure is about the unlikely hero traveling with a troop of dwarf to take back their home from the dragon Smog.", tags: "children, classic, fantasy, adventure"},
    {title: "The Fellowship of the Ring", type: "fiction", genre: "Fantasy", year: 1954, synopsis: "This is the first book in Lord of the Rings. Frodo along with his companion set out to destroy the one ring to save Middle Earth.", tags: "children, classic, fantasy, adventure"}
  ],
  // author: [
  //   {firstName: "J.R.R", lastName: "Tolkin", bio: "J. R. R. Tolkien, was an English writer, poet, philologist, and university professor who is best known as the author of the classic high-fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.", links:"https://en.wikipedia.org/wiki/J._R._R._Tolkien"}
  // ],
  // series: [
  //   {seriesName: "The Lord of the Rings", synopsis: "The epic fantasy following a fellowship on a quest to save Middle Earth"}
  // ],
  // review:[
  //   {status: "read", personalReview: "Personal favorite", criticReview:"", rating: 5}
  // ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item, {
      });
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});