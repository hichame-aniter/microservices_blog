'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

module.exports = sequelize.define(
  'Post',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isUrl:true }
    },
    status: {
      type: DataTypes.ENUM('draft', 'published'),
      defaultValue: 'draft',
    },
  },
  {
    // Other model options go here
    
  },
);

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true