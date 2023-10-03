import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const drivers = [
    {name:"fedya",callSign:1},
    {name:"gera",callSign:2},
    {name:"geran",callSign:3},
    {name:"gera",callSign:4},
    {name:"johnny",callSign:5},
    {name:"john",callSign:6},
]

export const fetchDrivers = createAsyncThunk(
    'drivers/getDrivers',
    async function (_,{rejectWithValue}) {
        try {
            const data = await fetch('http://localhost:8080/api/driver/getDrivers')
            console.log(data);
            if(!data.ok)throw new Error('ошибка запроса')
            const drivers = await data.json()
            return drivers
        
        } catch (error) {
           return rejectWithValue(error.message)
        }
       
    }
)
export const addDriverAsync = createAsyncThunk(
    'drivers/addDriver',
    async function (driver,{rejectWithValue,dispatch}) {
        try {
            const data = await fetch('http://localhost:8080/api/driver/addDriver',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(driver)
            })
            if(!data.ok) new Error('ошибка запроса')
            const newDriver = await data.json()
            dispatch(addDriver(newDriver))
        } catch (error) {
          return  rejectWithValue(error.message)
        }
    }
)

const driverSlice = createSlice({
    name:"drivers",
    initialState:{
        drivers,
        status:null,
        error:null
    },
    reducers:{
        addDriver(state,action){
            const newDriver = {
                ...action.payload
            }
            console.log(`reduser--------adddriver-------${state.drivers}`);
            state.drivers.push(newDriver)
        },
        delDriver(state,action){
            console.log(`DELDRIVER-------${action.payload.callSign}`);
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
    },
    extraReducers:{
        [fetchDrivers.pending]:(state,action)=>{
            state.status = 'loading'
            state.error = null
        },
        [fetchDrivers.fulfilled]:(state,action)=>{
            state.status = 'resolved'
            state.drivers= action.payload
        },
        [fetchDrivers.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
export const {addDriver,delDriver,getDriver,getDrivers,updateDriver} = driverSlice.actions
export default driverSlice.reducer