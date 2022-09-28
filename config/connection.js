const sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;