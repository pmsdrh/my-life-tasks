'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.GroupTask)
    }
  }
  Task.init({
    name: {
      type: DataTypes.STRING,
      defaultValue: ""
    },

    checked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: ""
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};