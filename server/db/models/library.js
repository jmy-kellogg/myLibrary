var Sequelize = require('sequelize');
var db = require('../_db');


var Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.ENUM('fiction', 'non-fiction')
  },
  genre: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      set: function (value) {

            var arrayOfTags;

            if (typeof value === 'string') {
                arrayOfTags = value.split(',').map(function (s) {
                    return s.trim();
                });
                this.setDataValue('genre', arrayOfTags);
                } else {
                this.setDataValue('genre', value);
            }
        }
  },
  year: {
    type: Sequelize.INTEGER,
  },
  synopsis: {
    type: Sequelize.TEXT,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set: function (value) {

            var arrayOfTags;

            if (typeof value === 'string') {
                arrayOfTags = value.split(',').map(function (s) {
                    return s.trim();
                });
                this.setDataValue('tags', arrayOfTags);
                } else {
                this.setDataValue('tags', value);
            }
        }
  },
  picture:{
    type: Sequelize.STRING,
    defaultValue: "https://www.anglo-egyptian.com/books_posters/defbookcover.jpg",
    isUrl: true,
  }

});

var Author = db.define('author', {
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type:Sequelize.STRING,
    allowNull: false  
  },
  bio:{
    type: Sequelize.TEXT
  },
  links:{
    type: Sequelize.STRING
  },
  picture:{
    type: Sequelize.STRING,
    defaultValue: "https://www.leanstartupmachine.com/images/default_profile_photo.png",
    isUrl: true,
  }
});

var Series = db.define('series', {
  seriesName: {
    type: Sequelize.STRING
  },
  synopsis: {
    type: Sequelize.TEXT
  }
});

var Review = db.define('review', {
  status:{
    type: Sequelize.ENUM('read', 'not read', 'wish list')
  },
  personalReview:{
    type: Sequelize.TEXT
  },
  criticReview:{
    type: Sequelize.TEXT
  },
  rating:{
    type: Sequelize.INTEGER,
    max: 5
  }
});

Book.belongsTo(Author);
Book.belongsTo(Series);
Series.belongsTo(Author);
Review.hasOne(Book);




module.exports = {  
  Book: Book,
  Author: Author,
  Series: Series,
  Review: Review,
};