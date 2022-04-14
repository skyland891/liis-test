import React from 'react'
import styles from '../css/Hotel.module.css'
import star from '../img/star.svg'
import emptyStar from '../img/empty_star.svg'
import { useDispatch, useSelector } from 'react-redux'

const renderStars = (stars) => {
  const starsArray = [];
  for(let i = 0; i < 5; i++) {
    starsArray.push(<img src={i < stars  ? star : emptyStar}/>);
  }
  return starsArray;
}

function Hotel({title, checkInDate, daysCount, stars, price, id, handleClick, fromFav}) {
  const isFav = useSelector(store => {
    if(fromFav) {
      for(let hotel of store.hotelsReducer.favHotels) {
        if(id === hotel.hotelId) {
          return hotel.isFav;
        }
      }
    }
    else {
      for(let hotel of store.hotelsReducer.hotelsList) {
        if(id === hotel.hotelId) {
          return hotel.isFav;
        }
      }
    }
  });
  return (
    <div className={!fromFav ? styles.container : styles.container__fav}>
      <div className={styles.container__1}>
        <h3 className={styles.name}>{title}</h3>  
        <button className={!isFav ? styles.heart : styles.fav__heart} onClick={(e) => {
          handleClick(e, id, styles);
        }}></button>  
      </div>
      <div>
        <span className={styles.date__text}>{checkInDate} - {daysCount}</span>
      </div>
      <div className={styles.container__2}>
        <div>
          {
            renderStars(stars)
          }
        </div>
        <span className={styles.price__text}>
          Price: <p className={styles.price}>{price}₽</p>
        </span>
      </div>
    </div>
  )
}

export default Hotel