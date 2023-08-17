const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my Home Page!')
    }
    if (req.url === '/about') {
        res.end('This is my about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We didn't find page you're looking for</p>
        <a href="/">click here for hompage</a>
        `)
})

server.listen(5000)