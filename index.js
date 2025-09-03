require('dotenv').config()

const express = require('express')
const app = express()

const sampleData = {
    "name":"pradeep",
    "age":"23",
    "location":"Noida"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello from server at /twitter route')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login to this page</>')
})

app.get('/data', (req, res) => {
    res.json(sampleData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})