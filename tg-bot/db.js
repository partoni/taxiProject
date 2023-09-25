const Pool =require('pg').Pool
const db = new Pool({
    user:'postgres',
    password:'238994',
    database:'taxi',
    port:'5432',
    host:'localhost'

})
module.exports = db

// const {Sequelize}=require('sequelize')

// module.exports = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect:"postgres",
//         host:process.env.HOST,
//         port:process.env.PORT
//     }



// )