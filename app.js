const express = require('express')
const path = require('path')
const { PLANS, FAQ, STEPS } = require('./config/constants')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist")))

app.get('/', (req, res) => {
    res.render('index', { PLANS, STEPS, FAQ })
})

app.listen(3000, () => {
    'Servidor rodando na porta: ' + 3000
})