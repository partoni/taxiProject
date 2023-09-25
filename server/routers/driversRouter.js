const { Router } = require("express");
const driverController = require("../controllers/driverController");

const driverRouter = new Router()

router.get('/getDriver',driverController.getDriver)
router.get('/getDrivers/:id',driverController.getDrivers)
router.post('/addDriver',driverController.addDriver)
router.post('/delDriver',driverController.delDriver)
router.post('/updateDriver',driverController.updateDriver)

module.exports = driverRouter