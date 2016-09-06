var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/my_library', { logging: false });

module.exports = db;
