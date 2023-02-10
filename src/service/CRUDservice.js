import connection from '../config/connectDB'

const getAllUsers = async () => {
  const [results, fields] = await connection.query('select * from Users')
  return results
}
const getUserById = async userId => {
  const [results, fields] = await connection.query(
    'select * from Users where `id` = ?',
    [userId]
  )
  let user = results && results.length > 0 ? results[0] : {}
  return user
}

const UpdateUserById = async (email, name, city, userId) => {
  const [results, fields] = await connection.query(
    `  UPDATE Users
    SET email = ?, name = ?, city= ?
    WHERE id = ?`,
    [email, name, city, userId]
  )
  return
}

const deleteUserById =  async(userId) => {
  const [results, fields] = await connection.query(
    `  DELETE FROM Users WHERE id = ?`,
    [userId]
  )
}
module.exports = {
  getAllUsers,
  getUserById,
  UpdateUserById,
  deleteUserById
}
