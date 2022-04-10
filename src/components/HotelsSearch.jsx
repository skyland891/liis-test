import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { loadingEnd } from '../store/authReducer';
import Loading from './Loading';

function HotelsSearch() {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    const isLoading = useSelector(store => store.authReducer.loading);
    const setUserError = useSelector(store => store.userReducer.setUserError);
    if(isAuth) {
        dispatch(loadingEnd());
        return (
            <div>
                Welcome !
            </div>
        )
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

export default HotelsSearch