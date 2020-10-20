const express = require('express')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('./DataBase/dbModules')
const createLogin = require('./DataBase/CreateLogin')

const bcrypt = require('bcrypt')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname + '\\views\\pages\\css\\'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})

app.post('/', async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }

        let newLogin = await createLogin.createPerson(req.body.name, req.body.email, hashedPassword)
        let loginList = await dbModule.store(newLogin)

        res.render('pages/index.ejs')
    } catch {
        res.status(500).send()
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
