const Driver = require("../models/driversModel")

class botController{
    static async updatePhoto(req,res){
        try{
            const {path,driver:idBot} = req.body
            await Driver.update({
                pathPhoto:path
            },{
                where:{
                    idBot
                }
                })
            
            const driver = await Driver.findOne({where:{idBot}})
           
            if(driver){
                res.status(200).json(driver)
            }else{
                
                throw new Error('Такого водителя нет')
        }
        }catch(error){
            res.text('error')
        }
    }
}

module.exports = botController