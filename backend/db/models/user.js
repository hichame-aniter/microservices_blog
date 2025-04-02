'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

module.exports = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'author', 'subscriber'),
      defaultValue: 'subscriber',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    profilePicture: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
    }
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT,
    profilePicture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};