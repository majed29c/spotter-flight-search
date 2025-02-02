const db = require('../config/db');
const supabase = db.supabase;

async function getUsers() {
  try {
    console.log('Fetching users from Supabase...');
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    console.log('Users fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw new Error(error.message);
  }
}

async function addUser(first_name, last_name, email, password) {
  try {
    console.log('Adding user to Supabase...');
    const { data, error } = await supabase.from('users').insert([{ first_name, last_name, email, password }]);
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    console.log('User added:', data);
    return data;
  } catch (error) {
    console.error('Error adding user:', error.message);
    throw new Error(error.message);
  }
}

module.exports = { getUsers, addUser };