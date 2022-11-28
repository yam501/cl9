require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use('/api ', router)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/team/', (req, res) => {
    res.render('team')
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log(__dirname)
        app.listen(PORT, () => console.log('Server started on port %s', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()