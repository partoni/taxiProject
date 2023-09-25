const {Router} = require('express')

const UserRouter = require('./UserRouter')
const botRouter = require('./botRouter')
const router = new Router()

router.use('/users',UserRouter)
router.use('/bot',botRouter)

module.exports = router