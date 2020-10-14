const express = require('express')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('./DataBase/dbModules')
const personModule = require('./DataBase/CreatePerson')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'views/pages/css'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('./pages/index.ejs')
})

app.post('/', (req, res) =>{

    let person = personModule.createPerson(req.body.name, req.body.email)
    dbModule.store(person)

    res.render('./pages/index.ejs')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
