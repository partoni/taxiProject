const Driver = require("../models/driversModel")
const fs = require('fs')
const path = require('path')

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
            const {id,name,auto,callsign,firstName,phone} = req.body
            const pathPhoto = path.join((path.parse(__filename)).root,'/taxi/server/photo',`/${req.body.name}`)
            fs.mkdirSync(pathPhoto)
            const files = req.files
            for(let name in files){
                const file = files[name]
                console.log(file);
                file.mv(`${pathPhoto}/${file.name}`,function(err){
                  
                  if (err)res.status(500).json(err)
                })
            }
              
            

            const driver = await Driver.create(
                {
                    id,
                    name,
                    auto,
                    callsign,
                    firstName,
                    phone,
                    pathPhoto,
                    // idBot   
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