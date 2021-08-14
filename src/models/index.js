'use strict';
require('dotenv').config();
const POSTGRES_URI =process.env.NODE_ENV='test' ? 'sqlite:memory ':'postgres://localhost:5432/lab04';

const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection');

const car = require('./car.models');
const driver = require('./driver.model');

let sequelize = new Sequelize( POSTGRES_URI ) ;

let  carModel = car(sequelize, DataTypes);
const driverModel = driver(sequelize, DataTypes);



carModel.hasMany(driverModel, { foreignKey: 'carId', sourceKey: 'id'});
driverModel.belongsTo(carModel, { foreignKey: 'carId', targetKey: 'id'});

const carCollection = new Collection(carModel);
const driverCollection = new Collection(driverModel);

module.exports = {
    db: sequelize,
    carCollection: carCollection,
    driverCollection: driverCollection,
}

// {
//     host: process.env.HOST,
//     dialect: 'mysql',
//     operatorsAliases: false,
//     logging: false, // <--- Disable logging
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },

// }