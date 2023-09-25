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
            // console.log('add photo to---------',driver)//get array [1] - amount of changed rows
            const driver = await Driver.findOne({where:{idBot}})
            console.log('add photo to---------',driver)
            if(driver){
                res.status(200).json(driver)
            }else{
                console.log('this driver dous not exist');// get 
                throw new Error('Такого водителя нет')
        }
        }catch(error){
            res.text('error')
        }
    }
}

module.exports = botController