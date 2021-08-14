'use strict';

const carModel = (sequelize, DataTypes) => {
    sequelize.define('car', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
}

module.exports = carModel;