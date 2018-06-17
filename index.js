
var express = require('express')
var app = express()

let bodyParser = require('body-parser')
let compression = require('compression')
let path = require('path')

app.get('/healthCheck', function (req, res) {
    res.status(200).send('I\'m healthy papa!')
})

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static(path.join(__dirname, 'public'), { redirect: false }))
app.get('*', (rqe, res) => res.sendFile(path.resolve(path.join(__dirname, 'public/index.html'))))

//Launch listening server on port 8081
app.listen(8081, function () {
    console.log('Hey buddy.. app listening on port 8081!')
})