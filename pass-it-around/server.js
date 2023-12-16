const express = require("express")

const app = express()

app.get('/', (res, req) => {
    res.send("<h1>99 Bottles of beer on the wall</h1><a href='/98'>Take one down, pass it around</a>")
})

app.get('/:numberOfBottles', (res, req) => {
    const numberOfBottles = req.params.numberOfBottles
    if (numberOfBottles > 0) {
        res.send(`<h2>${numberOfBottles} Bottles of beer on the wall.</h2><a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`)
      } else {
        res.send("<h2>0 bottles left on the wall!</h2><a href="/">I'm way too tipsy, but I'm here to party so let's start over</a>");
      }
    })
   
app.listen(3000, () => {
    console.log('server is listening on port 3000')
})