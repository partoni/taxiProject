const {Router} = require('express')
const botController = require('../controllers/botController')

const botRouter = new Router()

botRouter.post('/photo',botController.updatePhoto)

module.exports = botRouter