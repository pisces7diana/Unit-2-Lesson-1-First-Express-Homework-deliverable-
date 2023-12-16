const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

// Greetings

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}! It's so great to see you!</h1>`)
})

// Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipNum= (total * tipPercentage / 100)
    res.send(`<h1>Your tip will be ${tipNum} </h1>`)
})

