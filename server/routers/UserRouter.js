const UserController = require("../controllers/userController")

const {Router}  = require('express')

const UserRouter = new Router()

UserRouter.post('/reg',UserController.reg)

module.exports = UserRouter