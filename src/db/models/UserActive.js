import { Sequelize, DataTypes } from "sequelize";

import { databaseConnection } from "../index.js";

export const UserActiveModel = databaseConnection.define("UserActive", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // timestamps: true,
  // createdAt: true
  // createdAt: {
  //   type: Sequelize.DATE,
  //   get: function() { // or use get(){ }
  //     return this.getDataValue('createdAt')
  //       .toLocaleString('en-GB', { timeZone: 'UTC' });
  //   }
  // },
  // createdAt: {
  //   type: Sequelize.DATE,
  // },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
