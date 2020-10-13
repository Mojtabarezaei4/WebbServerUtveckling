const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('../DataBase/dbModules')
const personModule = require('../DataBase/CreatePerson')
const { Schema } = require('mongoose')

// Direct to the pages
const clientDir = __dirname + "..\\Views\\Pages\\"

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))