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

var name = ""

app.get('/', (req, res) => {
    if (name == "") res.render('pages/login.ejs')
    else res.render('pages/index.ejs', { name: createLogin.getAllPersons.name })
})

app.post('/', (req, res) => {
})

app.get('/register', (req, res) => {
    res.render('pages/register.ejs')
})

app.post('/register', async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword);
    let newLogin = createLogin.createPerson(req.body.name, req.body.email, hashedPassword)
    console.log(newLogin);
    await dbModule.store(newLogin)
    console.log("Registered!")
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('pages/login.ejs')
})

app.post('/login', async (req, res) => {

    try{
        const user = await createLogin.getOnePerson(req.body.email)
    if (user){
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(validPassword){
            res.render('pages/index.ejs', {name : user.name})
        }
    }    
    else {
        console.log("Faild!")
    }
    }catch{
        res.status(500).send("Something wrong")
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
