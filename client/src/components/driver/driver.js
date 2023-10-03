import { useDispatch } from "react-redux";
import styles from "./driver.module.scss";
import { delDriver } from "../../store/driverSlice";


function Driver({driver}) {
const dispatch = useDispatch()

   const removeDriver=()=>{
    dispatch(delDriver({callSign:driver.callSign}))
    }

    return(
        <div className={styles.driver}  key={Date.now()}>
            <h4>{driver.name}</h4>
            <div onClick={removeDriver}  className={styles.btnDelete}>delete</div>
        </div>
    )
}
export default Driver