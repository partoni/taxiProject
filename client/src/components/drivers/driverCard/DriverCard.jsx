import { useForm } from 'react-hook-form'
import styles from './driverCard.module.css'
import { useEffect } from 'react'
const initialDriver = {
    callSign:"100"
}
const DriverCard = ({driver})=>{
    const ownDriver = driver 
console.log('DriverCard-----',ownDriver);
const {register,formState:{errors},handleSubmit,reset}=useForm({
    mode:'onChange',
    defaultValues:{
        ...ownDriver
    }
})

useEffect(()=>{
    
    reset(
        {...ownDriver}
    )
},[ownDriver])
function onSubmit(data) {
    console.log(data);
    
}
    return(
        <div className={styles.card}>
            {ownDriver?<h3>Name:   {ownDriver.callSign}</h3>:<h2>ВОДИТЕЛЬ НЕ ВЫБРАН</h2>}
            <div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            <input type="number" required autocomplete='off' {...register('callSign',{
                                required:{
                                    value:true,
                                    message:"Validation is working"
                                },
                                minLength:{
                                    value:3,
                                    message:'minLength - 3'
                                },
                                
                            })}
                                />
                            <span>Позывной</span>
                        </label>
                        {errors.callSign&&<div style={{
                            
                            color:'red',

                        }}>ERROR:{errors.callSign.message}</div>}
                        
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            
                            <input type="text" required {...register('driverName')}></input>
                            <span>Имя</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            <input type="text" required  {...register('firstName')}></input>
                            <span>Фамилия</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            
                            <input type="text" required {...register('lastName')}></input>
                            <span>Отчество</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            
                            <input type="text" required  {...register('auto')}></input>
                            <span>Марка</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            
                            <input type="text" required {...register('numberAuto')}></input>
                            <span>Номер</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                           
                            <input type="text" required  {...register('color')}></input>
                            <span>Цвет</span>
                        </label>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.field}>
                            
                            <input type="text" required  {...register('phone')}></input>
                            <span>Телефон</span>
                        </label>
                    </div>
                    <div className={styles.btN}>
                        <div className={styles.btNitem}>
                            сохранить
                        </div>
                        <div className={styles.btNitem}>
                            удалить
                        </div>
                        
                    </div>
                    {/* <div className={styles.itemBtn}>

                        <div className={styles.btn}>
                            <input  type="submit" value={"сохранить"}/>
                        </div>
                        <div className={styles.btn}>
                            <input  type="submit" value={"удалить"}/>
                        </div>
                    </div> */}
                   
                   
                    
                </form>
            </div>
        </div>
    )
}
export default DriverCard