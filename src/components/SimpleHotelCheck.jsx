import React from 'react'
import HotelsSearchOptions from './HotelsSearchOptions';
import styles from '../css/SimpleHotelCheck.module.css'
import Favourite from './Favourite';
import HotelsResult from './HotelsResult';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/userReducer';
import logOut from '../img/log_out.svg'

function SimpleHotelCheck() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.header__title}>Simple Hotel Check</span>
          <span className={styles.exit__wrapper} onClick= {(e) => {
            dispatch(deleteUser());
          }}>
            <p className={styles.exit}>Выйти</p>
            <img src={logOut} width="15px" height="15px"/>
          </span>
        </header>
        <div className={styles.grid__container}>
            <div className={styles.grid__1}>
                <HotelsSearchOptions/>
                <Favourite/>
            </div>
            <div className={styles.grid__2}>    
                <HotelsResult/>
            </div>
        </div>
    </div>
  )
}

export default SimpleHotelCheck