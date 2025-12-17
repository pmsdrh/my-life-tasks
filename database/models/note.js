'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init({

    name: {
      type: DataTypes.STRING,
      defaultValue: 'بدون نام'
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: '#ffffff'
    }
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};