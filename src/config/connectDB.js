import mysql from 'mysql2/promise'

// create the connection to database
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// simple query
// const [results, fields] = connection.query(
//   'SELECT * FROM Users u  ',
//   console.log(results) // results contains rows returned by server
// )

export default connection
