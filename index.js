import express from 'express'
const app = express()
const port = 3000
const host = '0.0.0.0'

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))