import userService from '../service/userService'
import connection from '../config/connectDB'
import { getAllUsers } from '../service/CRUDservice'

const getHomePage = async (req, res) => {
  let results = await getAllUsers()
  console.log('checking results', results)
  return res.render('home.ejs', { listUsers: results })
}
const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  )
  res.send('hello post create new user')
}

const GetCreateUser = (req, res) => {
  return res.render('create.ejs')
}

module.exports = {
  getHomePage,
  postCreateUser,
  GetCreateUser
}
