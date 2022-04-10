import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Form.module.css'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  return String(password)
    .toLowerCase()
    .match(/[a-zA-Z0-9]+/) && (String(password).length >= 8);
}

function Form({titles, handleButton, setUserError}) {

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не должен быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formValid, setFormValide] = useState(false);

  useEffect(() => {
    if(emailError || passwordError) {
      setFormValide(false);
    }
    else {
      setFormValide(true);
    }
  }, [emailError, passwordError]);

  useEffect(() => {
    if(setUserError === true) {
      setEmailDirty(true);
      setEmailError('Неправильный логин или пароль');
    }
  }, [setUserError]);

  const setEmail = (e) => {
    setEmailValue(e.target.value);
    if(!validateEmail(e.target.value)) {
      setEmailError('Email указан некорректно');
      if(!e.target.value) {
        setEmailError('Email не должен быть пустым');
      }
    }
    else {
      setEmailError('');
    }
  }

  const setPassword = (e) => {
    setPasswordValue(e.target.value);
    if(!validatePassword(e.target.value)) {
      setPasswordError('Пароль не должен содержать кириллицу и быть короче 8 символов');
      if(!e.target.value) {
        setPasswordError('Пароль не должен быть пустым');
      }
    }
    else {
      setPasswordError('');
    }
  }

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    } 
  }

  return (
    <div className={styles['form-wrapper']}>
      <div className={styles['form-inner-wrapper']}>
        <h1 className={styles.title}>{titles.formTitle}</h1>
        <form className={styles.form}>
          <div className={styles['form__email-wrapper']}>
            <label className={!(emailDirty && emailError) ? styles['email__input-label'] : styles['invalid__email-label'] } htmlFor= "email">Login</label>
            <input value={emailValue} onBlur={e => blurHandler(e)} className={!(emailDirty && emailError) ? styles.email__input : styles['invalid__email-input']} type="email" name='email' placeholder="Email" id="email"  onChange={(e) => {
              setEmail(e);
            }}/>
            {(emailDirty && emailError) && <div className={styles.validate__error}>{emailError}</div>}
          </div>
            <div className={styles['form__password-wrapper']}> 
              <label className={!(passwordDirty && passwordError) ? styles['password__input-label'] : styles["invalid__password-label"]} htmlFor= "password">Password</label>
              <input value={passwordValue} onBlur={e => blurHandler(e)} className={!(passwordDirty && passwordError) ? styles.password__input : styles['invalid__password-input']} type="password" name='password' placeholder='Password' id='password' onChange={(e) => {
                setPassword(e);
              }}/>
              {(passwordDirty && passwordError) && <div className={styles.validate__error}>{passwordError}</div>}
            </div>
            <button disabled={!formValid} className={styles.form__button} onClick={(e) => {handleButton(e, emailValue, passwordValue)}}>{titles.buttonTitle}</button>
            <span>{titles.redirectTitle}<Link to={titles.link}>{titles.linkTitle}</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Form