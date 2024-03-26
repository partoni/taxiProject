import styles from "./Card.module.css"

export const Card = ({id,isVisably,setIsVisably,children}:{id:string,isVisably:string,setIsVisably:(id:string)=>void, children: React.ReactElement })=>{
return(
    <>
    {
        id===isVisably
        ?<div className={styles.activly} onClick={()=>setIsVisably(id)}>{children}</div>
        :<div className={styles.card} onClick={()=>setIsVisably(id)}>
    {children}
</div>
    }</>
    
    
)
}