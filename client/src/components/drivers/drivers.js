// import 

import Driver from "../driver/driver"

const ListDrivers = ({drivers,setStore})=>{
return(
    <>
    {drivers.map(driver=><Driver name={driver.name} setStore={setStore}/>)}
    </>
)
}
export {ListDrivers}