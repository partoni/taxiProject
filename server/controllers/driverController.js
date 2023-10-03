const Driver = require("../models/driversModel")

class driverController{

  
    static async getDriver(req,res){
        try{
            const {callsign} = req.params
            const driver = await Driver.findOne(
                {
                  where:{
                    callsign
                  }  
            }            
            )
            if(driver){
                res.status(200).json(driver)}
            
            }catch(error){
                res.status(400).json(error.message)
        }

    }
    static async getDrivers(req,res){
        try{
           
            const drivers = await Driver.findAll()
          
                res.status(200).json(drivers)
            
            }catch(error){
                res.status(400).json(error.message)
        }

    }
    static async addDriver(req,res){
        try{
            const {id,name,auto,callsign,firstName,phone,pathPhoto,idBot} = req.body
            const driver = await Driver.create(
                {
                    id,
                    name,
                    auto,
                    callsign,
                    firstName,
                    phone,
                    pathPhoto,
                    idBot   
            }            
            )
            if(driver){
                res.status(200).json(driver)}
            
            }catch(error){
                res.status(400).json(error.message)
        }

    }
    static async delDriver(req,res){
        try{
            const {callsign} = req.body
            await Driver.destroy({
                where:{
                    callsign
                }
            })
            res.status(200).text('удален')
            }catch(error){
                res.status(400).json(error.message)
            }

    }
    static async updateDriver(req,res){
        try{
            const {callsign,...arg} = req.body
            const driver = Driver.update({
                ...arg
            },{
                where:{
                    callsign
                }
            })
            res.status(200).json(driver)
            }catch(error){
                res.status(400).json(error.message)
        }

    }
}
module.exports = driverController