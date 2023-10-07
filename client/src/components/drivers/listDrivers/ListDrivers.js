// import 

import Driver from "../driver/Driver"

const ListDrivers = ({store})=>{
// drivers.forEach(element => {
//     // console.log(element);
// });
// console.log(`LISTDRIVERS-------${drivers}`);
if(!store.drivers.length)return(<h3>Нет водителей</h3>)
return(
    <div>
    {store.drivers.map(driver=>{
        // console.log(driver);
    return <Driver driver={driver} />})}
    </div>
)
}
export {ListDrivers}