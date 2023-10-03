// import 

import Driver from "../driver/driver"

const ListDrivers = ({drivers})=>{
// drivers.forEach(element => {
//     // console.log(element);
// });
// console.log(`LISTDRIVERS-------${drivers}`);
return(
    <>
    {drivers.map(driver=>{
        // console.log(driver);
    return <Driver driver={driver} />})}
    </>
)
}
export {ListDrivers}