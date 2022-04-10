import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Form.module.css'
function Form({titles, handleEmail, handlePassword, handleButton}) {
  return (
    <div className={styles['form-wrapper']}>
      <div className={styles['form-inner-wrapper']}>
        <h1 className={styles.title}>{titles.formTitle}</h1>
        <form className={styles.form}>
          <div className={styles['form__email-wrapper']}>
            <label className={styles['email__input-label']} for= "email">Login</label>
            <input className={styles.email__input} type="email" placeholder="Email" id="email"  onChange={(e) => {
              handleEmail(e.target.value);
            }}/>
          </div>
            <div className={styles['form__password-wrapper']}> 
              <label className={styles['password__input-label']} for= "password">Password</label>
              <input className={styles.password__input} type="password" placeholder='Password' id='password' onChange={(e) => {
                handlePassword(e.target.value);
              }}/>
            </div>
            <button className={styles.form__button} onClick={(e) => {handleButton(e)}}>{titles.buttonTitle}</button>
            <span>{titles.redirectTitle}<Link to={titles.link}>{titles.linkTitle}</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Form