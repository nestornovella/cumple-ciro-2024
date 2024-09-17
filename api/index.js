const  express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { connectTo } = require('./db')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.listen(PORT , connectTo.sync({force:true}).then(()=> console.log('escuchando y conectado')) )