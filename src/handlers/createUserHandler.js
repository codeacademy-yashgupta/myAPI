const Model = require('./../../models');

module.exports = async (req, res) => {
  await Model.user.generate(req.payload.name, req.payload.email);
  return res.response('User created').code(201);
};
