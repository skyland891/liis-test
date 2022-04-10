import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../store/userReducer';
import { useAuth } from '../hooks/useAuth';
import { loadingStart } from '../store/authReducer';
import Form from './Form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const setUserError = useSelector(store => store.userReducer.setUserError);
  const handleClick = (e, emailValue, passwordValue) => {
    e.preventDefault(); 
    dispatch(signInUser({email: emailValue, password: passwordValue}));
    dispatch(loadingStart());
    navigate('/');
  }
  if(isAuth) {
    return (<Navigate to='/'/>);
  }
  return (
    <Form titles={{
      formTitle: 'Войти',
      buttonTitle: 'Войти',
      redirectTitle: 'Нет аккаунта? ',
      link: '/registration',
      linkTitle: 'Регистрация',
    }} handleButton={handleClick} setUserError= {setUserError}/>
  )
}

export default Login