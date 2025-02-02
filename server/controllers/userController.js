const userModel = require('../models/userModel');

async function getUsers(req, res) {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers };
