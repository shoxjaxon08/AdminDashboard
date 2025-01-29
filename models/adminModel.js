// models/adminModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING, // Role maydoni
    allowNull: true,
    defaultValue: 'admin'  // Default qiymat 'admin'
  }
}, {
  timestamps: false
});

module.exports = Admin;
