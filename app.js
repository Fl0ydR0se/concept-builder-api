const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const myResponseFR = require('./response/responseFR')
    myResponseDE = require('./response/responseDE')
    myResponseGB = require('./response/responseGB')
    myResponseUS = require('./response/responseUS')
    
const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})

app.get('/', async (req, res) =>{
 await res.send("200, I'm ok!")
})

app.post('/concept-builder/fr', async (req, res) => {
    const seedWord = await req.body.seedWord
    res.status(200).json(myResponseFR)
    
})

app.post('/concept-builder/de', async (req, res) => {
    const seedWord = await req.body.seedWord
    res.status(200).json(myResponseDE)
    
})

app.post('/concept-builder/gb', async (req, res) => {
    const seedWord = await req.body.seedWord
    res.status(200).json(myResponseGB)
    
})

app.post('/concept-builder/us', async (req, res) => {
    const seedWord = await req.body.seedWord
    res.status(200).json(myResponseUS)
    
})

