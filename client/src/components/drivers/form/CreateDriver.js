import React from "react"
import styles from "./CreateDriver.module.css"
const CreateDriver=()=>{
return(
    <form className={styles.form}>
        <h3>Добавить водителя</h3>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Позывной</span>
            <div className={styles.line}></div>
        </label>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Имя</span>
            <div className={styles.line}></div>
        </label>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Фамилия</span>
            <div className={styles.line}></div>
        </label>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Машина</span>
            <div className={styles.line}></div>
        </label>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Телефон</span>
            <div className={styles.line}></div>
        </label>
        <label className={styles.form__item}>
            <input className={styles.form__input} required/>
            <span className={styles.form__span}>Телефон</span>
            <div className={styles.line}></div>
        </label>
        <button className={styles.btn}>Добавить</button>
    </form>
   
)
}
export {CreateDriver}