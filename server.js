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

// Magic 8 Ball

app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    const randomMagicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const response = randomMagicBall[Math.floor(Math.random() * randomMagicBall.length)];
    res.send(`<h1>Question: ${question}</h1><h1>Response: ${response}</h1>`);


})