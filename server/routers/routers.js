const {Router} = require('express')

const UserRouter = require('./UserRouter')
const router = new Router()

router.use('/users',UserRouter)

module.exports = router