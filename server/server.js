const express = require('express')
const path = require('path')

const covidTestData = require('./routes/covidTestData')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/testData', covidTestData)

module.exports = server
