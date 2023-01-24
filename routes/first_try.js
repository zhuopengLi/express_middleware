import express from 'express'
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', { text: 'World' })
})
router.get('/helloworld', (req, res) => {
    console.log("Someone's coming")
    res.send('Heeeeeeeeeeeeeeeeeeey')
})
router.get('/hamster', (req, res) => {
    res.download('./hamster.jpg')
})
router.get('/200', (req, res) => {
    res.status(200).json({
        message: 'You made it here, but nothing for you yet.',
    })
})
router.get('/500', (req, res) => {
    res.sendStatus(500)
})

export default router