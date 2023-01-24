import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index', { text: 'World' })
})
app.get('/helloworld', (req, res) => {
    console.log("Someone's coming")
    res.send('Heeeeeeeeeeeeeeeeeeey')
})
app.get('/hamster', (req, res) => {
    res.download('./hamster.jpg')
})
app.get('/200', (req, res) => {
    res.status(200).json({
        message: 'You made it here, but nothing for you yet.',
    })
})
app.get('/500', (req, res) => {
    res.sendStatus(500)
})

app.listen(3000)

console.log('Hello world')
