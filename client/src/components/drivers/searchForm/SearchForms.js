import { useSelector } from "react-redux"
import { Card } from "../../../ui/card/Card"
import { CreateDriver } from "../form/createDriver"
import styles from "./SearchForms.module.scss"
import { ListDrivers } from "../listDrivers/ListDrivers"
import { useState } from "react"
import DriverCard from "../driverCard/DriverCard"





export default function(){
  const store = useSelector(state=>state.drivers)
  const {error,status,drivers}= useSelector(state=>state.drivers)
  const [driver,setDriver] = useState(store.drivers[0])


  const showDetails = (driver)=>{
    const chosenDriver = store.drivers.find(item=>item.callSign===driver.callSign)
    setDriver(chosenDriver)
  }
    return(        
       <div className={styles.forms} >
        <Card>
          <ListDrivers store={store} chosenDriver={driver} showDetails={showDetails}/>
        </Card>
        <Card>
          <DriverCard driver={driver} className={styles.two} />
        </Card>
        <Card>
          <CreateDriver/>
          {error&&<span>{error}</span>}
        </Card>
       </div>
    )
}