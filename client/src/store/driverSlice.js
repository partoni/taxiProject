import { createSlice } from "@reduxjs/toolkit";

const drivers = [
    {name:"fedya",callSign:1},
    {name:"gera",callSign:2},
    {name:"geran",callSign:3},
    {name:"gera",callSign:4},
    {name:"johnny",callSign:5},
    {name:"john",callSign:6},
]

const driverSlice = createSlice({
    name:"drivers",
    initialState:{
        drivers
    },
    reducers:{
        addDriver(state,action){

            const newDriver = {
                ...action.payload
            }
            console.log(`ADD DRIVER_____${JSON.stringify(newDriver)}`);
            state.drivers.push(newDriver)
        },
        delDriver(state,action){
            
            state.drivers = state.drivers.filter(item=>item.callSign!==action.payload.callSign)
        },
        getDriver(state,action){
            const argName = action.payload.argName
            state.drivers = state.drivers.find(item=>item[argName]===action.payload[argName])
        },
        getDrivers(state,action){
            const argName = action.payload.argName
            state.drivers = state.drivers.filter(item=>item[argName]===action.payload[argName])
        },
        updateDriver(state,action){
            const argName = action.payload.argName
            state.drivers.map((item,index,obg)=>{
               if(item[argName]===action.payload[argName]){
                obg[index]=action.payload.driver
                return obg[index]
            }
               return item})
            
        }
    }
})
export const {addDriver,delDriver,getDriver,getDrivers,updateDriver} = driverSlice.actions
export default driverSlice.reducer