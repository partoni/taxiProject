require('dotenv').config()
const express = require('express')
const sequelize  = require('./db')
const router = require('./routers/routers.js')
const cors = require('cors')

const PORT = process.env.PORT||5000
const app = express()
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

const startServer = async()=>{
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(PORT,()=>console.log(`port:${PORT}`))
    } catch (error) {
        
    }

}
startServer()