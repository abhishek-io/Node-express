const express = require('express');
const Router = express.Router();
const app = express();
app.use('/',Router)

Router.get('/',(req,res)=>{res.end('hello world!')})
Router.get('/api/GetAll',(req,res)=>{res.end('asdasdsa')})
app.listen(5000,()=>console.log("app listening on port 5000"))

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'db'
})

connection.connect()


connection.query('SELECT * from student', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

