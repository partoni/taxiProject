import { useDispatch } from "react-redux";
import styles from "./Driver.module.css";
import { delDriver } from "../../../store/driverSlice";


function Driver({driver}) {
const dispatch = useDispatch()

   const removeDriver=()=>{
    dispatch(delDriver({callSign:driver.callSign}))
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