require('dotenv/config')
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const twilioAccount = require('./twiliio')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello')
});

app.post('/incoming', (req, res) => {
    console.log(req.body)
    console.log('retornando', req.body.Body);
})

app.listen(port, () => {
    console.log(`Listen on ${port}`);
})