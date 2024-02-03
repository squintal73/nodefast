const express = require('express')
const app = express()
const port = 3000
const host = '0.0.0.0'
app.get('/', (req, res) => res.send('<h2>Hello World!</h2>'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))