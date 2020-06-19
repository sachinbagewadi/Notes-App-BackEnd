const express= require('express')
const setupDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3040
const cors = require('cors')


app.use(express.json())
app.use('/', router)
app.use(cors())

//db configuretion
setupDB()

app.listen(port, ()=> {
    console.log('listening on port', port)
})