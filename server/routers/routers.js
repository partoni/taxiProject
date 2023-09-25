const {Router} = require('express')

const UserRouter = require('./UserRouter')
const botRouter = require('./botRouter')
const driverRouter = require('./driversRouter')

const routers = new Router()

routers.use('/users',UserRouter)
routers.use('/bot',botRouter)
routers.use('/driver',driverRouter)
module.exports = routers