'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupTask extends Model {
    static associate(models) {
      GroupTask.belongsTo(models.Project)
      GroupTask.hasMany(models.Task);
    }
  }
  GroupTask.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupTask',
  });
  return GroupTask;
};