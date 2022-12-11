require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandilingMiddleware')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static'))) // Раздаем папку со статикой всем
app.use(fileUpload({}))

app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', router)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/team/', (req, res) => {
    res.render('team')
})

app.get('/result/', (req, res) => {
    res.render('result')
})


app.get('/404/', (req, res) => {
    res.render('404')
})

app.get('/game/', (req, res) => {
    res.render('game')
})

app.use(function (req, res) {
    res.status(404).render('404');
});
app.use(errorHandler)//Обработка ошибки, последний мидлеваре ВСЕГДА ДОЛЖЕН БЫТЬ В САМОМ КОНЦЕ!!!к
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

//TODO START OF ROUTERS https://youtu.be/H2GCkRF9eko?t=1530  37:27(работа с бд ЗАВТРА НАЧАТЬ)