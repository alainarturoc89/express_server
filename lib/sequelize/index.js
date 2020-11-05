const { Sequelize, DataTypes } = require('sequelize');

const fs = require('fs');

const configBD = require("../../config/db");

const sequelize = new Sequelize(configBD.mysql);

const mappings = __dirname + "/mappings/";

fs.readdir(mappings, (err, files) => {
	files.forEach(file => { require(mappings + file.split(".js")[0])(sequelize, DataTypes); });
});

module.exports = sequelize;