import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { loadingEnd } from '../store/authReducer';
import { fetchHotels } from '../store/hotelsReducer';
import Loading from './Loading';
import SimpleHotelCheck from './SimpleHotelCheck';

function SimpleHotelCheckContainer() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const isLoading = useSelector(store => store.authReducer.loading);
  const setUserError = useSelector(store => store.userReducer.setUserError);

  useEffect(() => {
    if(isAuth) {
      const day = new Date();
      dispatch(fetchHotels({location: 'Moscow', checkInDate:  day.getFullYear() + '-' + ('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + day.getDate()).slice(-2), checkOutDate: '2022-04-15'}));
    }
  }, [isAuth]);

  if(isAuth) {
    dispatch(loadingEnd());
    return (
     <SimpleHotelCheck/>
    );
  }
  else {
    if(isLoading) {
      if(setUserError) {
        dispatch(loadingEnd());
        return <Navigate replace to='/login'/>
      }
      return <Loading/>
    }
    return (
      <Navigate replace to='/login'/>
    );
  }
}

export default SimpleHotelCheckContainer