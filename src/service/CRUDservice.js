import connection from '../config/connectDB'

const postCreateNewUser = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  )
}
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
  return results
}

const deleteUserById = async userId => {
  const [results, fields] = await connection.query(
    `  DELETE FROM Users WHERE id = ?`,
    [userId]
  )
}
module.exports = {
  getAllUsers,
  getUserById,
  UpdateUserById,
  deleteUserById,
  postCreateNewUser
}
