// import { useDispatch } from "react-redux";
import styles from "./Driver.module.css";
// import { delDriverAsync } from "../../../store/driverSlice";


function Driver({driver,showDetails}) {
// const dispatch = useDispatch()
console.log(`Driver-------${driver.callSign}`);
//    const removeDriver=()=>{
//     dispatch(delDriverAsync({callSign:driver.callSign}))
//     }

    return(
        <div className={styles.driver} onClick={()=>showDetails(driver)} key={Date.now()}>
            <span>{driver.callSign}</span>
            <span>{driver.driverName}</span>
            <span>{driver.firstName}</span>
            <span>{driver.phone}</span>
            <span>{driver.auto}</span>
            {/* <div onClick={removeDriver}  className={styles.btnDelete}>delete</div> */}
        </div>
    )
}
export default Driver