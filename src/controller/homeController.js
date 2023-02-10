import userService from '../service/userService'
import connection from '../config/connectDB'
import {
  getAllUsers,
  getUserById,
  UpdateUserById,
  deleteUserById
} from '../service/CRUDservice'

const getHomePage = async (req, res) => {
  let results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results })
}
const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  )
  res.redirect('/')
}

const getCreateUser = (req, res) => {
  return res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)

  return res.render('edit.ejs', { userEdit: user })
}
const postUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body
  console.log('checking email name city', email, name, city, userId)
  const updateUser = await UpdateUserById(email, name, city, userId)

  return res.redirect('/')
}

const getdeleteUser = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)

  return res.render('delete.ejs', { userEdit: user })
}

const handleDeleteUser = async (req, res) => {
  const { userId } = req.body
  console.log('user Id', userId)
  let deleteUser = await deleteUserById(userId)
  return res.send('/ ')
}

module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  postUpdateUser,
  getdeleteUser,
  handleDeleteUser
}
