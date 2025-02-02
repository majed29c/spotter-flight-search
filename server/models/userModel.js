const db = require('../config/db');
const supabase = db.supabase;

async function getUsers() {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { getUsers };