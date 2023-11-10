import { useSelector } from 'react-redux'
import styles from './HomePage.module.scss'

export const HomePage = ()=>{
const city = useSelector(state=>state.drivers.city)
console.log(city);
    return(
        <div className={styles.main}>
            <div className={styles.bg}>fgnfgdm</div>
            <div className={styles[city]}>
            
          </div>
        </div>
    )
}