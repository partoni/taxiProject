const {Router} = require('express')

const UserRouter = require('./UserRouter')
const botRouter = require('./botRouter')
const driverRouter = require('./driversRouter')
const routers = new Router()

router.use('/users',UserRouter)
router.use('/bot',botRouter)
router.use('/driver',driverRouter)
module.exports = routers