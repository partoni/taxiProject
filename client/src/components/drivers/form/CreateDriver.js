import React, { useEffect, useState } from "react"
import styles from "./CreateDriver.module.css"
import { useForm } from "react-hook-form"
import { addDriverAsync } from "../../../store/driverSlice"
import { useDispatch } from "react-redux"

const CreateDriver=()=>{
    const dispatch =useDispatch()
    // const {error,status,drivers}= useSelector(state=>state.drivers)
    const {register,watch,reset,formState:{errors},handleSubmit} = useForm(
        {
          mode:'onChange'  
        }
    )
    const[imgList,setImgList]=useState([])
    
    let watchFiles = watch('files')
    useEffect(()=>{
        let fileList=[];
        const subscription = watch((value, { name, type }) => {
             if(value.files){
                [...value.files].map((file,index)=>{
                    
                    let imgData = new FileReader()
                    imgData.readAsDataURL(file)
                    imgData.onload = ()=>{
                        fileList=[...fileList,imgData.result]
                        setImgList([...fileList])
                   }
                })
            }
             
           
        });
             
        return () => subscription.unsubscribe();
    },[watchFiles])

    const onSubmit = async (data)=>{
        const formData = new FormData()
        for(let name in data){
            formData.append(name,data[name])
        }
       if(data.files.lenght!==0){
        const fileList=[...data.files]
        fileList.map((file,index)=>{
          formData.append(`${index}${Date.now()}`,file,file.name)
        })
       }

       console.log('ONSUBMIT-------',formData);
       console.log('ONSUBMIT-------DATA-',data);
       
        dispatch(addDriverAsync(formData))
        // const dataFetch = await fetch('http://localhost:8080/api/driver/addDriver',{
        //     method:'POST',
        //     body:formData
        // })

        // const driver = await dataFetch.json()
        setImgList([])
        reset()
    }
        
return(
    
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {console.log(`render`)}
        <h3>Добавить водителя</h3>
        <div className={styles.form__item}>
        <label className={styles.form__field}>
            <input className={styles.form__input} {...register('callSign',{
                required:true,
                minLength:{
                    value:2,
                    message:'few simvols'
                }
            })} required/>
            <span className={styles.form__span}>Позывной</span>
            <div className={styles.line}></div>
        </label>
        {errors.callSign?<div style={{color:'red',border:'1px solid #000',margin:'-10px' }} >{errors.callSign.message}</div>:null}
        </div>
        <div className={styles.form__item}> 
        <label className={styles.form__field}>
            <input className={styles.form__input} {...register('name')} required/>
            <span className={styles.form__span}>Имя</span>
            <div className={styles.line}></div>
        </label>
        </div>
        <div className={styles.form__item}>
        <label className={styles.form__field}>
            <input className={styles.form__input} {...register('firstName')} required/>
            <span className={styles.form__span}>Фамилия</span>
            <div className={styles.line}></div>
        </label>
</div>
<div className={styles.form__item}>

        <label className={styles.form__field}>
            <input className={styles.form__input} {...register('auto')} required/>
            <span className={styles.form__span}>Машина</span>
            <div className={styles.line}></div>
        </label>
        </div>
        <div className={styles.form__item}>
        <label className={styles.form__field}>
            <input className={styles.form__input} {...register('phone')} required/>
            <span className={styles.form__span}>Телефон</span>
            <div className={styles.line}></div>
        </label> 
         </div>
        <div className={styles.form__item}>
        <label className={styles.form__field_file}>
            <input type='file' multiple className={styles.form__input_file} {...register('files')} />
            <svg className="form__svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="rgb(59, 60, 62)" fillRule="evenodd" d="M2.07 5.008C2 5.376 2 5.818 2 6.7v7.05c0 3.771 0 5.657 1.172 6.828C4.343 21.75 6.229 21.75 10 21.75h4c3.771 0 5.657 0 6.828-1.172C22 19.407 22 17.521 22 13.75v-2.202c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 0 0-.224-.225c-.855-.769-2.172-.769-4.804-.769h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352c-.488-.271-.896-.68-1.712-1.495l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903c-.186-.017-.38-.017-.766-.017c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.007ZM12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V14.5H10a.75.75 0 0 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11Z" clipRule="evenodd"/></svg>
            <span className={styles.form__span_file}>Загрузить файл</span>
            <div className={styles.img}>
                {(imgList.length>0)
                ?imgList.map((item,id)=><img key={id}  src={item} alt=""/>)
                :<span>фото отсутствует</span>}
                </div>
        </label>
        </div>
        <button className={styles.btn}>Добавить</button>
    </form>
   
)
}
export {CreateDriver}