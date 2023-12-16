const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}! It's so great to see you!</h1>`)
})