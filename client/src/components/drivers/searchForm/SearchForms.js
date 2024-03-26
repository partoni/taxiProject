import { useSelector } from "react-redux"
import { Card } from "../../../ui/card/Card"
import { CreateDriver } from "../form/createDriver"
import styles from "./SearchForms.module.scss"
import { ListDrivers } from "../listDrivers/ListDrivers"
import { useState } from "react"
import DriverCard from "../driverCard/DriverCard"
import Modal from "../../modal"






export default function(){
  const store = useSelector(state=>state.drivers)
  const {error,status}= useSelector(state=>state.drivers)
  const [driver,setDriver] = useState(store.drivers[0])
const [isVisably,setIsVisably] = useState('second')

  const showDetails = (driver)=>{
    const chosenDriver = store.drivers.find(item=>item.callSign===driver.callSign)
    setDriver(chosenDriver)
  }
 
    return(   
          
       <div className={styles.forms} >
        {error&&<Modal error={error}/>}
        <Card id='first' isVisably={isVisably} setIsVisably={setIsVisably}>
          <ListDrivers store={store} chosenDriver={driver} showDetails={showDetails}/>
        </Card>
        
        <Card id='second' isVisably={isVisably} setIsVisably={setIsVisably}>
          <DriverCard driver={driver} />
        </Card>
        <Card id='third' isVisably={isVisably} setIsVisably={setIsVisably}>
          <CreateDriver/>
          {error&&<span className={styles.error}>{error}</span>}
        </Card>
       </div>
    )
}