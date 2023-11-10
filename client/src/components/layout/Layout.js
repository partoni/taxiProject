import {NavLink, Outlet} from 'react-router-dom'
import styles from './Layout.module.css'
const MainPage = ()=>{ 
    const setActive = ({isActive})=>isActive?styles.active:''
    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <div><NavLink to='/home' className={setActive}>Главная</NavLink></div>
                <div><NavLink to='/V'className={setActive}>Волхов</NavLink></div>
                <div><NavLink to='/T'className={setActive}>Тихвин</NavLink></div>
            </div>
            <div className={styles.nav}>
                <div><NavLink to='/dispetchers'>Диспетчера</NavLink></div> 
                <div> <NavLink to='/drivers'>Водители</NavLink></div>
            </div>

            <div  className={styles.cont} >
                <Outlet/>
            </div>
                <div className={styles.footer}>
                <h3>footer</h3>
            </div>
        </div>
    )
}
export {MainPage}