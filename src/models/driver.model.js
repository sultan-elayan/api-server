'use strict';

const driverModel = (sequelize, DataTypes) => {
    sequelize.define('driver', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

        carId: {

            type: DataTypes.INTEGER,
            allowNull: false
         }
        
    });
}

module.exports = driverModel ;