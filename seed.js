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
    {title: "The Hobbit", type: "fiction", genre: "Fantasy", year: 1937, synopsis: "This is the prequel to the Lord of the Rings is about Bilbo Baggins. This adventure is about the unlikely hero traveling with a troop of dwarf to take back their home from the dragon Smog.", tags: "children, classic, fantasy, adventure", picture: "http://www.ravenoak.net/wp-content/uploads/2014/12/thehobbit.jpg"},
    {title: "The Fellowship of the Ring", type: "fiction", genre: "Fantasy", year: 1954, synopsis: "This is the first book in Lord of the Rings. Frodo along with his companion set out to destroy the one ring to save Middle Earth.", tags: "children, classic, fantasy, adventure", picture: "http://www.councilofelrond.com/wp-content/uploads/modules/My_eGallery/gallery/covers/books/NenyaGoldFotRBookCoverCoE.jpg"},
    {title: "Harry Potter and the Sorcer Stone", type: "fiction", genre: "children", year: 1997, synopsis:"This is the tale of Harry Potter, an ordinary 11-year-old boy living with his aunt and uncle learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Hagrid, the grounds keeper for Hogwarts. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted." , tags: "magic, children, adventure" , picture: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/7/30/18/grid-cell-14969-1375222023-8.jpg"},
    {title: "Harry Potter and the Chamber of Secrets", type: "fiction", genre: "children", year: 1998, synopsis:"When a crazy houself named Dobby arrives in Harry's room, he warns him that there is a plot to destroy Hogwarts and that he shouldn't return. Harry then starts hearing voices through the walls, students being petrified, and a girl who died in a bathroom. He soon finds out that it is a basilisk roaming in the Chamber Of Secrets, under the control from a memory of Lord Voldemort. Is Voldemort still inactive? Or will it be a friend of his being controlled?" , tags: "magic, children, adventure" , picture: "https://dolmv3q9e9skh.cloudfront.net/productImage/?sku=lens-harry_potter_and_the_chamber_of_secrets&w=150"},
    {title: "Harry Potter and the Chamber of Secrets", type: "fiction", genre: "children", year: 1999, synopsis: "Harry Potter's third year at Hogwarts starts off badly when he learns deranged killer Sirius Black has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's cat torments Ron's sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?" , tags: "magic, children, adventure" , picture: "https://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg"},
    {title: "Of Mice and Men", type: "fiction", genre: "classic", year: 1937, synopsis: "Steinbeck's story of George and Lennie's ambition of owning their own ranch, and the obstacles that stand in the way of that ambition, reveal the nature of dreams, dignity, loneliness, and sacrifice. Ultimately, Lennie, the mentally handicapped giant who makes George's dream of owning his own ranch worthwhile, ironically becomes the greatest obstacle to achieving that dream.", tags: "great-depression, friendship", picture: "https://images-na.ssl-images-amazon.com/images/I/51wuHv30-ML._SY344_BO1,204,203,200_.jpg"},
    // {title: , type: , genre: , year: , synopsis: , tags: , picture: }
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