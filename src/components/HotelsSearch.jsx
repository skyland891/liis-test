import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { loadingEnd } from '../store/authReducer';

function HotelsSearch() {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    const isLoading = useSelector(state => state.authReducer.loading);
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
            return <div>ЗАГРУЗКА...</div>
        }
        return (
            <Navigate replace to='/login'/>
        );
    }
}

export default HotelsSearch