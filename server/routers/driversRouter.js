const { Router } = require("express");
const driverController = require("../controllers/driverController");

const driverRouter = new Router()

driverRouter.get('/getDriver',driverController.getDriver)
driverRouter.get('/getDrivers/:id',driverController.getDrivers)
driverRouter.post('/addDriver',driverController.addDriver)
driverRouter.post('/delDriver',driverController.delDriver)
driverRouter.post('/updateDriver',driverController.updateDriver)

module.exports = driverRouter