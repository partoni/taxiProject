const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Driver = sequelize.define('drivers',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    firstName:{type:DataTypes.STRING},
    auto:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    // role:{type:DataTypes.STRING, defaultValue:'DRIVER'},
    pathPhoto:{type:DataTypes.STRING},
    idBot:{type:DataTypes.INTEGER},
    callSign:{type:DataTypes.INTEGER}
})


module.exports = Driver