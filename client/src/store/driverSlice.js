import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const drivers = [
    {id:1,
    name:'Петя',
    firstName:'Петров',
    auto:'волга',
    phone:'98726234',
    // role:{type:DataTypes.STRING, defaultValue:'DRIVER'},
    pathPhoto:'/photo',
    idBot:'983837347',
    callSign:'1000'}
]


export const fetchDrivers = createAsyncThunk(
    'drivers/fetchDrivers',
    async function (city,{rejectWithValue}) {
        try {
            const data = await fetch(`http://localhost:8080/api/driver/getDrivers/${city}`)
            
            if(!data.ok)throw new Error('ошибка запроса')
            const drivers = await data.json()
            console.log('createAsyncThunk-------',drivers);
            return drivers
        
        } catch (error) {
           return rejectWithValue(error.message)
        }
       
    }
)
export const addDriverAsync = createAsyncThunk(
    'drivers/addDriverAsync',
    async function (driver,{rejectWithValue,dispatch}) {
        try {
            const data = await fetch('http://localhost:8080/api/driver/addDriver',{
                method:"POST",
                // headers:{
                //     'Content-Type':'application/json'
                // },
                body:driver
            })
            console.log('DATA______',data);
            if(!data.ok) {
                console.log('----data ok----');
               throw new Error(await data.json())}
            const newDriver = await data.json()
            // dispatch(addDriver(newDriver))
            console.log('ADDDriversAsync_____',newDriver);
            return newDriver
        } catch (error) {
          return  rejectWithValue(error.message)
        }
    }
)
export const delDriverAsync = createAsyncThunk(
    'drivers/delDriverAsync',
    async function (driver,{rejectWithValue,dispatch}) {
        console.log('delDriverAsync =====');
        try {
            const data = await fetch('http://localhost:8080/api/driver/delDriver',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(driver)
            })
            console.log('DATA_DEL------',await data.json())
            dispatch(delDriver(driver))
            // if(!data.ok) new Error('ошибка запроса')
            // const newDriver = await data.json()
            // dispatch(addDriver(newDriver))
            // console.log('ADDDriversAsync_____',newDriver);
            // return newDriver
        } catch (error) {
          return  rejectWithValue(error.message)
        }
    }
)

const driverSlice = createSlice({
    name:"drivers",
    initialState:{
      
            
                drivers:[
                    {id:1,
                    driverName:'Петя',
                    firstName:'Петров',
                    auto:'волга',
                    phone:'98726234',
                    // role:{type:DataTypes.STRING, defaultValue:'DRIVER'},
                    pathPhoto:'/photo',
                    idBot:'983837347',
                    callSign:'1000'}
                ],  
            
          
        
       
        status:null,
        error:null,
        city:'volhov'
    },
    reducers:{
        addDriver(state,action){
            console.log('ADDdriver____',action.payload);
            const newDriver = {
                ...action.payload
            }
            console.log(`reduser--------adddriver-------${state.drivers}`);
            state.drivers.push(newDriver)
        },
        delDriver(state,action){
            console.log(`DELDRIVER-------${action.payload.callSign}`);
            state.drivers = state.drivers.filter(item=>{
                console.log('item.callSign----',item.callSign)
                console.log('action.payload.callSign-----',action.payload.callSign)
                return item.callSign!==action.payload.callSign})
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
        },
        [addDriverAsync.fulfilled]:(state,action)=>{
            state.status = 'resolved'
            state.drivers = [...state.drivers,action.payload ] 
        },
        [addDriverAsync.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
export const {addDriver,delDriver,getDriver,getDrivers,updateDriver} = driverSlice.actions
export default driverSlice.reducer