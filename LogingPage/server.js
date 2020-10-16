const express = require('express')
const app = express()
const port = 3000

//Connecting to the data base
const dbModule = require('./DataBase/dbModules')
const commentsModule = require('./DataBase/StoreComments')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname + '\\views\\pages\\css\\'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})

app.post('/', async (req, res) =>{

    let createdAt = new Date().toString()

    let comment = commentsModule.storeComments(req.body.name, req.body.message, createdAt)
    await dbModule.store(comment)
    let commentList = await commentsModule.getAllComments()
    
    res.render('pages/messages.ejs', {comments : commentList})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
