let express = require('express')
let path = require('path')
let app = express()
let server = require('http').Server(app)

let port = process.env.PORT || 3001

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

server.listen(port, () => console.log(`Server started on Port ${port}`))