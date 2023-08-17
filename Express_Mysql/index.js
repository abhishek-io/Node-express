//=================================Node Server=======================================================
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.fs("index.html");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${PORT}`);
});

//==============================================Express server================================
// const express = require('express')

// const path = require('path')

// const app = express()
// const port = process.env.port || 5000;

//   //init middleware
//   // app.use(Logger);
// // Set static page
// app.use(express.static(path.join(__dirname,'Public')));

// //Body parser middleware
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// //Middleware
// app.use('/api/Person', require('./Router'));

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`)
// })
