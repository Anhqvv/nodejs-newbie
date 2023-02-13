import {
  getAllUsers,
  postCreateNewUser,
  UpdateUserById,
  getUserById,
  deleteUserById
} from '../service/CRUDservice'

const apiGetAllUsers = async (req, res) => {
  let data = await getAllUsers()
  return res.status(200).json({
    message: 'my name',
    data: data
  })
}

const apiCreateNewUser = async (req, res) => {
  if (!email || !name || !city) {
    return res.status(200).json({
      message: 'Please checking input required'
    })
  }
  const { email, name, city } = req.body

  const data = await postCreateNewUser(email, name, city)
  return res.status(200).json({
    message: ' post OK ',
    data: data
  })
}

const apiUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body

  await UpdateUserById(email, name, city, userId)
  let data = await getUserById(userId)
  return res.status(200).json({
    message: 'update ok',
    data: data
  })
}

const apiDeleteUser = async (req, res) => {
  const { userId } = req.body
  console.log('checking id', userId)
  await deleteUserById(userId)
  return res.status(200).json({
    message: 'Delte OK'
  })
}

module.exports = {
  apiGetAllUsers,
  apiCreateNewUser,
  apiUpdateUser,
  apiDeleteUser
}
