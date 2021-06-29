const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    ID: {
      type: DataTypes.INTEGER,
      allowNill: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define tag_name column
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
