import styles from "./searchForm.module.scss"
import{useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'

import {addDriverAsync} from '../../store/driverSlice'

export default function(){
const {register,reset,formState:{errors,isValid},handleSubmit} = useForm({
    mode:"onChange"
})

const dispatch = useDispatch()
const onSubmit = (data)=>{
    // console.log(`ONSUBMIT--------${JSON.stringify(data)}`)
    // console.dir(data)
    dispatch(addDriverAsync(data))
    reset()
}
// console.dir(errors)
// console.log(`ERRORS--------${JSON.stringify(errors)}`)
    return(
        <div className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formItem}>
            <label>
                Позывной
                <input {...register('callSign',{
                    required:{
                        value:true,
                        message:"ошибка в форме"

                    }
                })} placeholder="позывной"></input>
                </label>
            </div >
            <div className={styles.formItem}><label>
               Имя
                <input {...register('name',{
                    required:{
                        value:true,
                        message:"ошибка в форме"

                    }
                })} placeholder="имя"></input>
                </label></div>
            <div className={styles.formItem}><label>
            Фамилия
                <input {...register('firstName',{
                    required:{
                        value:true,
                        message:"ошибка в форме"
                    },
                    minLength:{
                        value:5,
                        message:"too few characters"
                    }
                })} placeholder="Фамилия"></input>
                </label>
                {errors.surName?<div style={{backgroundColor:"red"}}>{errors.surName.message}</div>:null}
                </div>
            <div className={styles.formItem}><label>
                Машина
                <input {...register('auto',{
                    required:{
                        value:true,
                        message:"ошибка в форме"

                    }
                })} placeholder="машина"></input>
                </label></div>
            <div className={styles.formItem}><label>
                Телефон
                <input {...register('phone',{
                    required:{
                        value:true,
                        message:"телефон"

                    }
                })} placeholder="телефон"></input>
                </label></div>   
                <input type="submit" className={styles.btnForm}/> 
            {/* <div className={styles.btnForm} >Добавить</div> */}
            {/* <button>Добавить</button> */}
            </form>
        </div>
    )
}