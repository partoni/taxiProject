require('dotenv').config()
const express = require('express')
const fetch = require('node-fetch')
const fs = require('fs')
const sequelize  = require('./db')
const router = require('./routers/routers.js')
const Driver = require('./models/driversModel.js')
// const cors = require('cors')
const app = express()
const PORT = process.env.PORT||5000
const tokenTg = process.env.TOKEN_TELEGRAMM

// app.use(cors({
//     credentials:true,
//     origin:"http://localhost:5000"
// }))
app.use(express.json())
// app.get('/',(req,res)=>{
//     const body= req.query
//     res.status(200).json(body)
// })
app.use("/api",router)
console.log(__dirname);
const startServer = async()=>{
    try {
        await sequelize.authenticate()
        console.log('Соединение с БД было успешно установлено')
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e,'---END---')
      }
      try {
        await sequelize.sync({ alter: true })
        console.log('sequelize.sync ALL OK');
      } catch (error) {
        console.log('sequelize.sync MISTAKE',error,'-----_____END MISTAKE_____----');
      }
    try {
        
        
        const driver=await Driver.findOne({
            where: {
              id: 13
            }
          })
          // console.log('DRIVER----',driver);
        const photo = await fetch(`https://api.telegram.org/file/bot${tokenTg}/${driver.phone}`)
       .then(res =>res.body.pipe(fs.createWriteStream('./photo/image.jpg')))
        
        app.listen(PORT,()=>console.log(`port:${PORT}`))
    } catch (error) {
        console.log(error);
    }
    // await fetch(`https://api.telegram.org/file/bot${token}/${image.file_path}`)
    // .then(res =>
	// 	res.body.pipe(fs.createWriteStream('./photo/image.jpg')))
    //     // https://api.telegram.org/file/bot<token>/<file_path>
    //     console.log(image.file_path);
}
startServer()