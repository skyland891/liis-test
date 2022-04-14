import React, { useState } from 'react';
import styles from '../css/Favourite.module.css';
import Hotel from './Hotel';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavouriteHotel, setFavouriteHotel, sortingByPrice, sortingByRating } from '../store/hotelsReducer';

function Favourite() {
  const dispatch = useDispatch();
  const [sortingMode, setSortingMode] = useState({
    sortingBy: "rating",
    direction: "up",
  });
  const {hotelsList, favHotels} = useSelector(store => store.hotelsReducer);
  const toggleFavHotel = (e, id, styles) => {
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

  const sortByPrice = () => {
    setSortingMode(prevState => {
      if(prevState.direction === 'up') {
        return {...prevState, sortingBy: 'price', direction: 'down'};
      }
      else {
        return {...prevState, sortingBy: 'price', direction: 'up'};
      }
    });
    dispatch(sortingByPrice(sortingMode));
  }

  const sortByRating = () => {
    setSortingMode(prevState => {
      if(prevState.direction === 'up') {
        return {...prevState, sortingBy: 'rating', direction: 'down'};
      }
      else {
        return {...prevState, sortingBy: 'rating', direction: 'up'};
      }
    });
    dispatch(sortingByRating(sortingMode));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.select__container}>
        <div onClick={(e) => {
          sortByRating();
        }} className={styles.rating + " " +(sortingMode.sortingBy !== 'rating' ? styles.disabled : "")}>
          <span className={styles.rating__text}>Рейтинг</span>
          <div className={(sortingMode.sortingBy === 'rating' && sortingMode.direction === 'up') ? styles['rating__up-active'] : styles.rating__up}></div>
          <div className={(sortingMode.sortingBy === 'rating' && sortingMode.direction === 'down') ? styles['rating__down-active'] : styles.rating__down}></div>
        </div>
        <div onClick={(e) => {
          sortByPrice();
        }} className={styles.price + " " +(sortingMode.sortingBy !== 'price' ? styles.disabled : "")}>
          <span className={styles.price__text}>Цена</span>
          <div className={(sortingMode.sortingBy === 'price' && sortingMode.direction === 'up') ? styles['price__up-active'] : styles.price__up}></div>
          <div className={(sortingMode.sortingBy === 'price' && sortingMode.direction === 'down') ? styles['price__down-active'] : styles.price__down}></div>
        </div>
      </div>
      <div className={styles.fav__hotels}>
      {
        favHotels?.map(hotel => <Hotel 
          title= {hotel.hotelName}
          checkInDate={hotel.checkInDate} 
          daysCount={hotel.checkOutDate}
          stars={hotel.stars}
          price={hotel.priceFrom}
          id={hotel.hotelId}
          handleClick= {toggleFavHotel}
          fromFav={true}
        />)
      }
      </div>
    </div>
  )
}

export default Favourite