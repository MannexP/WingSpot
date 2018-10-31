const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))


app.set('view engine', 'hbs')
// app.use(express.static('views/images'))

app.use(express.static(__dirname + '/public'))

app.use(logger('dev'))

app.use('/', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Express server is listening on port 3000')
})