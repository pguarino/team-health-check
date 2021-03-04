// import express module, creating express application
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

const db = require("./models")
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.")
})
//route definition
//
// callback function that will be invoked whenever a GET request
// with path '/' relative to the side root
app.get('/', (req, res) => {
    //sends http response
    res.json({message: "Hello World!"})
})

const port = process.env.PORT || 8001
// starts up the server on port 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})