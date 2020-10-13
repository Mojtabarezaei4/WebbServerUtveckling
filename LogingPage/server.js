const express = require('express')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('./DataBase/dbModules')
const personModule = require('./DataBase/CreatePerson')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/', (req, res) =>{
    let person = personModule.createPerson(req.body.name, req.body.email)

    dbModule.store(person)
    resp.render()
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
