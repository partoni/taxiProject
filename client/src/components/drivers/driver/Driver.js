import { useDispatch } from "react-redux";
import styles from "./Driver.module.css";
import { delDriverAsync } from "../../../store/driverSlice";


function Driver({driver}) {
const dispatch = useDispatch()
console.log(`Driver-------${driver.callSign}`);
   const removeDriver=()=>{
    dispatch(delDriverAsync({callSign:driver.callSign}))
    }

    return(
        <div className={styles.driver}  key={Date.now()}>
            <span>{driver.callSign}</span>
            <span>{driver.name}</span>
            <span>{driver.firstName}</span>
            <span>{driver.phone}</span>

            <div onClick={removeDriver}  className={styles.btnDelete}>delete</div>
        </div>
    )
}
export default Driver