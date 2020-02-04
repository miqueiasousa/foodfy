const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Chef = require('../models/Chef');
const Recipe = require('../models/Recipe');
const File = require('../models/File');

const connection = new Sequelize(dbConfig);

User.init(connection);
Chef.init(connection);
Recipe.init(connection);
File.init(connection);

Chef.associate(connection.models);
Recipe.associate(connection.models);
File.associate(connection.models);

module.exports = connection;
