import express from 'express'
import userRouter from './routes/users.js'
import firstTryRouter from './routes/first_try.js'

const app = express()

const logger = (req, res, next) => {
    console.log(req.originalUrl)
    next()
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', logger, logger, logger, (req, res) => {
    res.send('Hello World')
})

app.use('/users', userRouter)
app.use('/first_try', firstTryRouter)

app.listen(3000)
