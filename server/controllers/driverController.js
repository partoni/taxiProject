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
            const city = req.params
           console.log('----GetDrivers has worked----',city);
            const drivers = await Driver.findAll()
          
                res.status(200).json(drivers)
            
            }catch(error){
                console.log("ERROR-----");
                res.status(400).json(error.message)
        }

    }
    static async addDriver(req,res){
        try{
            const {name:driverName,auto,callSign,firstName,phone} = req.body
            const pathPhoto = path.join((path.parse(__filename)).root,'/taxi/server/photo',`/${req.body.callSign}`)
            fs.mkdirSync(pathPhoto)
            const files = req.files&&null
            if(files){for(let name in files){
                console.log('files________',files);
                const file = files[name]
                console.log(file);
                file.mv(`${pathPhoto}/${file.name}`,function(err){
                  
                  if (err)res.status(500).json(err)
                })
            }
              
        }

            const driver = await Driver.create(
                {                   
                    driverName,
                    auto,
                    callSign,
                    firstName,
                    phone,
                    pathPhoto,
                    // idBot   
            }            
            )
            
            if(driver){
                console.log('driver----',driver);
                res.status(200).json(driver)}
            
            }catch(error){
                console.log('ERROr----',error.message);
                res.status(400).json(error.message)
        }

    }
    static async delDriver(req,res){
        try{
            const {callSign} = req.body
            await Driver.destroy({
                where:{
                    callSign
                }
            })
            res.status(200).json({del:true})
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