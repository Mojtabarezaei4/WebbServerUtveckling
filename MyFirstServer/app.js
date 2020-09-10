const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"
const clientImages = __dirname + "\\client\\images\\"

var bodyParser = require('body-parser')

app.use(bodyParser())

app.use(express.json());

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/generalStyling', (req, res) => res.sendFile(clientDir + "generalStyling.CSS"))

app.get('/MoreProductionFavicon', (req, res) => res.sendFile(clientImages + "MoreProductionFavicon.jpg"))
app.get('/Longedrag', (req, res) => res.sendFile(clientImages + "Longedrag.jpg"))
app.get('/DroneCarOnBridge', (req, res) => res.sendFile(clientImages + "DroneCarOnBridge.jpg"))
app.get('/DroneBridge', (req, res) => res.sendFile(clientImages + "DroneBridge.jpg"))
app.get('/Hinsholmen', (req, res) => res.sendFile(clientImages + "Hinsholmen.jpg"))
app.get('/TentSky', (req, res) => res.sendFile(clientImages + "TentSky.jpg"))
app.get('/Mojje', (req, res) => res.sendFile(clientImages + "Mojje.jpg"))
app.get('/MojjeLandingsPage', (req, res) => res.sendFile(clientImages + "MojjeLandingsPage.png"))

app.get('/', function(req, resp) {
    resp.sendFile('index.html', {root: path.join(clientDir)})
})
app.post('/', function(req, resp) {
    resp.json(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))