const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database = require('ronin-database')

const server = ronin.server()

database.connect("mongodb://mongo:27017/notes")

server.use('/', mocks.server(server.Router(), false, false ))
console.log("Server running")
server.start()

