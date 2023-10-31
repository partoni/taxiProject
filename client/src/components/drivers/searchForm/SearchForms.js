import { useSelector } from "react-redux"
import { Card } from "../../../ui/card/Card"
import { CreateDriver } from "../form/createDriver"
import styles from "./SearchForms.module.css"





export default function(){

  const {error,status,drivers}= useSelector(state=>state.drivers)


    return(        
       <div className={styles.forms}>
        <Card>
          <CreateDriver/>
          {error&&<span>{error}</span>}
          </Card>
         <Card></Card>
         <Card></Card>
       </div>
    )
}