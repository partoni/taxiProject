const { Router } = require("express");
const driverController = require("../controllers/driverController");

const driverRouter = new Router()

driverRouter.get('/getDriver/:id',driverController.getDriver)
driverRouter.get('/getDrivers',driverController.getDrivers)
driverRouter.post('/addDriver',driverController.addDriver)
driverRouter.post('/delDriver',driverController.delDriver)
driverRouter.post('/updateDriver',driverController.updateDriver)

module.exports = driverRouter