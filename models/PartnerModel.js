const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Partner = sequelize.define(
  "Partner",
  {
    partner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: { // `role` ustuni shu yerda aniqlanadi
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "partner", // Default qiymat
    },
  },
  {
    timestamps: false, // Ikkinchi argumentda `timestamps` yoki boshqa sozlamalar bo'ladi
  }
);

module.exports = Partner;
