import express from 'express'
import userRouter from './routes/users.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('oiafnsaf')
})

app.use('/users', userRouter)

app.listen(3000)
