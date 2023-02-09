import mysql from 'mysql2'

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
// connection.query('SELECT * FROM Users u  ', function (err, results, fields) {
//   console.log('Checking DB')
//   console.log(results) // results contains rows returned by server
// })

export default connection
