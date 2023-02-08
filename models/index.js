const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Postgres Configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.todos = require("./todo.model.js")(sequelize, Sequelize);
db.translations = require("./translation.model")(sequelize, Sequelize);

module.exports = db;