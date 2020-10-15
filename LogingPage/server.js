const express = require('express')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('./DataBase/dbModules')
const personModule = require('./DataBase/CreatePerson')
const messagesModule = require('./DataBase/StoreMessages')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname + '\\views\\pages\\css\\'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})

app.post('/', async (req, res) =>{
    let message = messagesModule.storeMessages(req.body.message)
    dbModule.store(message)

    let messagesList = await messagesModule.getAllMessages()
    res.render('pages/messages.ejs', {messages : messagesList})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
