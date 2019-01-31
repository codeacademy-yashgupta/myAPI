module.exports = (sequelize, DataTypes) => {
  const createUser = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  createUser.generate = (name, email) => createUser.create({ name, email });
  createUser.getAllUser = () => createUser.findAll();
  return createUser;
};
