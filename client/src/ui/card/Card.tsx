import styles from "./Card.module.css"

export const Card = ({children}:{ children: React.ReactElement })=>{
return(
    <div className={styles.card}>
        {children}
    </div>
)
}