// import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Driver.module.css";
// import { delDriverAsync } from "../../../store/driverSlice";


function Driver({driver,showDetails,checked}) {

// const dispatch = useDispatch()
console.log(`Driver-------${driver.callSign}`);
console.log(`checked-------${checked}`);
//    const removeDriver=()=>{
//     dispatch(delDriverAsync({callSign:driver.callSign}))
//     }

const handleClickOnDriver = ()=>{
    
    showDetails(driver)
}
    return(
        <div className={styles.driver}
          style={{
            borderBottom:checked?"2px solid #6A00ED":"2px solid #000"
        }}
          onClick={handleClickOnDriver}
          key={Date.now()}>
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