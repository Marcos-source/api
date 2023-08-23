const express = require('express')
const body = require('body-parser')
const app = express()

app.use(body.json())

app.post('/', function (req, res) {
    console.log(req.body)
    res.send('Hello World')
})

app.listen(3000)