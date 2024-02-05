import { useSelector } from 'react-redux'
import styles from './HomePage.module.scss'

export const HomePage = ()=>{
const city = useSelector(state=>state.drivers.city)
console.log(city);
    return(
        <div className={styles.main}>
            <div className={styles.bg}>
                <div className={
                    styles.bg_list
                }>
                <ol>
                    <li>Работаешь в такси —
                            работаешь на себя</li>
                    <li>Работа в любое
                            время</li>
                    <li>Фиксированные тарифы</li>
                    <li>Детские кресла</li>
                    
                </ol>
                </div>
                
            </div>
            <div className={styles[city]}>
            
          </div>
        </div>
    )
}