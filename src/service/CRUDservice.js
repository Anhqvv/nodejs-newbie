import connection from '../config/connectDB'

const getAllUsers = async () => {
  const [results, fields] = await connection.query('select * from Users')
  return results
}

module.exports = {
  getAllUsers
}
