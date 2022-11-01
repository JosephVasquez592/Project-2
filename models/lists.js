const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class List extends Model {}

List.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING
    },
    purchased: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list'
});

module.exports = List;