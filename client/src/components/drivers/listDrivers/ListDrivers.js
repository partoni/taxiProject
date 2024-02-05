 

import Driver from "../driver/driver"

const ListDrivers = ({store,showDetails,chosenDriver})=>{
// drivers.forEach(element => {
//     // console.log(element);
// });
// console.log(`LISTDRIVERS-------${drivers}`);
if(!store.drivers.length)return(<h3>Нет водителей</h3>)
return(
    <div>
    {store.drivers.map(driver=>{
        // console.log(driver);
        const checked = (driver.callSign===chosenDriver?.callSign)?true:false
        console.log(`CHECKED____${driver.callSign}-----`,checked);
    return <Driver showDetails={showDetails} checked={checked}driver={driver} key={driver.id}/>})}
    </div>
)
}
export {ListDrivers}