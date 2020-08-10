const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`)
})
