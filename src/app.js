import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import flash from 'connect-flash'
import routes from '#root/routes/index'
import {notFound, catchErrors} from '#root/middlewares/errors'
import session from 'express-session'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.APP_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(flash())

app.use('/', routes)

app.use(notFound)
app.use(catchErrors)

module.exports = app