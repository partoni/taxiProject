import styles from "./searchForm.module.css"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import { addDriver } from "../../store/driverSlice"


export default function(){
const {register,reset,handleSubmit,formState:{errors,isValid}}=useForm({
    mode:"onChange"
})
const dispatch =useDispatch()

const onSubmit = (data)=>{
    console.log(`onSubmit-------${JSON.stringify(data)}`);
    dispatch(addDriver(data))
    
    reset()
}
console.log(errors);
console.log(isValid);
    return(
        <div className={styles.main}>
            <h3>Регистрация водителя</h3>
            <form onSubmit={handleSubmit(onSubmit) } className={styles.form}>
            <div className={styles.input}>
                    <label>
                    <input {...register("callSign",{
                        required:"много символов",
                        maxLength:{
                        value:4,
                        message:"максимум 4 символа"
                        }
                        
                    })} placeholder="позывной"/> 
                    </label>
                    <div>{errors.callSign?errors.callSign.message:'eeeee'}</div>
                </div> 
               <div className={styles.input}>
                    <label>
                    <input {...register("name",{
                        required:true
                    })} placeholder="имя"/> 
                    </label>
                </div> 
               <div className={styles.input}>
                    <label>
                    <input {...register("surName",{
                        required:{
                            value: true,
                            message:"Фамилию нужно заполнить"
                        }
                    })} placeholder="фамилия"/> 
                    </label>
                </div> 
               <div className={styles.input}>
                    <label>
                    <input {...register("auto",{
                        required:{
                            value: true,
                            message:"Авто нужно заполнить"
                        }
                    })} placeholder="авто"/> 
                    </label>
                </div> 
               <div className={styles.input}>
                    <label>
                    <input {...register("phone",{
                        required:{
                            value: true,
                            message:"Телефон нужно заполнить"
                        }
                    })} placeholder="телефон"/> 
                    </label>
                </div> 
               
               {/* <div className={styles.input}>
                    <label>
                    <input type="number" {...register("callSign",{
                        required: {
                            value: true,
                            message: "You must specify your first name before moving forward"
                        },
                        minLength:{
                            value:4,
                            message:"максимум 4 символа"
                            }
                            // pattern:/^([1-9]|1[0-2])$/
                        }
                    )} placeholder="позывной" /> 
                    </label>
                    {errors.callSign?<div style={{color:"red"}}>{errors.callSign.message}</div>:null}
                    {/* <div style={{color:"red"}}>{errors?errors:'eeeee'}</div> */}
                {/* </div>  */} 
               <button className={styles.btnForm}disabled={!isValid}>Добавить</button>
                {/* <input type="submit" className={styles.btnForm} /> */}
            </form>
        </div>
    )
}