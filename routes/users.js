import express from 'express'
const router = express.Router()

const logger = (req, res, next) => {
    console.log(req.originalUrl)
    next()
}

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.render('users/index')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ name: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { name: req.body.firstName })
    }
    console.log(req.body.firstName, users)
})

router
    .route('/:id')
    .get((req, res) => {
        let id = req.params.id
        res.send(`Your name is ${req.user.name}`)
    })
    .post((req, res) => {
        res.sendStatus(403)
    })

const users = [{ name: 'Kyle' }, { name: 'Sally' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

export default router
