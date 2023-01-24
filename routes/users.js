import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

export default router