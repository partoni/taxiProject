 

import Driver from "../driver/driver"

const ListDrivers = ({store,showDetails})=>{
// drivers.forEach(element => {
//     // console.log(element);
// });
// console.log(`LISTDRIVERS-------${drivers}`);
if(!store.drivers.length)return(<h3>Нет водителей</h3>)
return(
    <div>
    {store.drivers.map(driver=>{
        // console.log(driver);
    return <Driver showDetails={showDetails} driver={driver} key={driver.id}/>})}
    </div>
)
}
export {ListDrivers}