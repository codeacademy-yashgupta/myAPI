const Model = require('./../../models');

module.exports = async (req, res) => {
  const resp = await Model.user.getAllUser();
  return res.response(resp).code(200);
};
