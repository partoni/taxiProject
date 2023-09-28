// import 

import Driver from "../driver/driver"

const ListDrivers = ({drivers,setStore})=>{


return(
    <>
    {drivers.map(driver=><Driver driver={driver} setStore={setStore}/>)}
    </>
)
}
export {ListDrivers}