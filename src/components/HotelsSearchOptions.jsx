import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../css/HotelsSearchOptions.module.css'
import { fetchHotels } from '../store/hotelsReducer';

function HotelsSearchOptions() {
  const day = new Date
  const dispatch = useDispatch();
  const [locationInput, setLocationInput] = useState('Москва');
  const [date, setDate] = useState(('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + day.getDate()).slice(-2) + '-' + day.getFullYear());
  const [daysCount, setDaysCount] = useState('1');
  return (
    <div className={styles.container}>
      <form className={styles.form}>  
        <div className={styles.location}>
          <label className={styles.label} htmlFor='location'>Локация</label>
          <input className={styles.input} value={locationInput} id='location' onChange={(e) => {
            setLocationInput(e.target.value);
          }}/>
        </div>
        <div className={styles.date}>
          <label className={styles.label} htmlFor='date'>Дата заселения</label>
          <input className={styles.input} value={date} type='date' id='date' onChange={(e) => {
            setDate(e.target.value);
          }}/>
        </div>
        <div className={styles['days__count']}>
          <label className={styles.label} htmlFor='days_count'>Количество дней</label>
          <input className={styles.input} value= {daysCount} id='days_count' onChange={(e) => {
            setDaysCount(e.target.value);
          }}/>
        </div>
        <button className={styles.button} onClick= {(e) => {
          e.preventDefault();
          console.log("поиск");
          let checkOutDate = new Date(date);
          checkOutDate = new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), Number(('0' + checkOutDate.getDate()).slice(-2)) + Number(daysCount));
          dispatch(fetchHotels({location: locationInput, checkInDate: date, checkOutDate: checkOutDate.getFullYear() + '-' + ('0' + (checkOutDate.getMonth() + 1)).slice(-2) + '-' + ('0' + checkOutDate.getDate()).slice(-2)}));
        }}>Найти</button>
      </form>
    </div>
  )
}

export default HotelsSearchOptions