const {Router} = require('express')
const botController = require('../controllers/botController')

const botRouter = new Router()

botRouter.post('/photo',botController)

module.exports = botRouter