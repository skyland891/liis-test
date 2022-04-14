import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hotel from './Hotel';
import styles from '../css/HotelsResult.module.css'
import { deleteFavouriteHotel, setFavouriteHotel } from '../store/hotelsReducer';
import hotel_1 from '../img/hotel_1.png';
import hotel_2 from '../img/hotel_2.png';
import hotel_3 from '../img/hotel_3.png';
import HorizontalScroll from 'react-scroll-horizontal';

function HotelsResult() {
  const dispatch = useDispatch();
  const {hotelsList, favHotels, location, checkInDate} = useSelector(store => store.hotelsReducer);
  const toggleFavHotel = (e, id) => {
    e.preventDefault();
    const compareId = element => element.hotelId === id;
    const newFavHotels = favHotels.filter(hotel => hotel.hotelId !== id);
    if(newFavHotels.length === favHotels.length) {
      dispatch(setFavouriteHotel({hotel: hotelsList.find(compareId)}));
    }
    else {
      dispatch(deleteFavouriteHotel({id: id}));
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Отели<p className={styles.symbol}> &gt; </p> {hotelsList[0]?.location?.name || "Москва"}</h1>
        <span className={styles.date}>{checkInDate || new Date().toDateString()}</span>
      </header>
      <div className={styles.slider__container}>
        <HorizontalScroll>
          <img className={styles.img} src= {hotel_1}/>
          <img className={styles.img} src= {hotel_2}/>
          <img className={styles.img} src= {hotel_3}/>
          <img className={styles.img} src= {hotel_1}/>
          <img className={styles.img} src= {hotel_2}/>
          <img className={styles.img} src= {hotel_3}/>
        </HorizontalScroll>
      </div>
      <span>Добавлено в избранное: <p>{favHotels.length}</p> отеля</span>
      <div className={styles.hotels}>
        {
          hotelsList?.map(hotel => <Hotel
            title= {hotel.hotelName}
            checkInDate={hotel.checkInDate} 
            daysCount={hotel.checkOutDate}
            stars={hotel.stars}
            price={hotel.priceFrom}
            id={hotel.hotelId}
            handleClick= {toggleFavHotel}
            fromFav= {false}
        />)
        }
      </div>
    </div>
  )
}

export default HotelsResult