import userService from '../service/userService'
import connection from '../config/connectDB'

const handleHelloWord = (req, res) => {
  return res.render('home.ejs')
}
const postCreateUser = (req, res) => {
  const { email, name, city } = req.body
  connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
    }
  )

  return res.send('hello post create new user')
}

module.exports = {
  handleHelloWord,
  postCreateUser
}
