'use strict';
module.exports = (sequelize, DataTypes) => {
  const createUser = sequelize.define('createUser', {
    name: DataTypes.STRING
  }, {});
  createUser.associate = function(models) {
    // associations can be defined here
  };
  return createUser;
};