const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

async function getUsers(req, res) {
  try {
    console.log('Controller: getUsers called');
    const users = await userModel.getUsers();
    console.log('Controller: Users fetched', users);
    res.json(users);
  } catch (error) {
    console.error('Error in getUsers controller:', error.message);
    res.status(500).json({ error: error.message });
  }
}

async function addUser(req, res) {
  try {
    console.log('Controller: addUser called');
    const { first_name, last_name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password,10);
    const user = await userModel.addUser(first_name, last_name, email, hashedpassword);
    console.log('Controller: User added', user);
    res.json(user);
  } catch (error) {
    console.error('Error in addUser controller:', error.message);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers, addUser };
