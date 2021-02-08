//environment
require('dotenv').config()

//imports
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const controllers = require('./controllers')

//app set up
const app = express()
app.set('view engine', 'ejs')

//middleware
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

//routes
app.get('/', (req,res)=>{
    res.send('welcome to my app')
})

app.use('/users', controllers.users)

//port

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))