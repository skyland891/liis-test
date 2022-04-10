import React from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../store/userReducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { loadingStart } from '../store/authReducer';
import { useAuth } from '../hooks/useAuth';
import Form from './Form';

function Registration() {
  const navigate = useNavigate();
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();
  const handleClick = (e, emailValue, passwordValue) => {
      e.preventDefault();
      dispatch(signUpUser({email: emailValue, password: passwordValue}));
      dispatch(loadingStart());
      navigate('/');
  }
  
  if(isAuth) {
    return (<Navigate to='/'/>);
  }
  return (
    <Form titles={{
      formTitle: 'Регистрация',
      buttonTitle: 'Зарегистрироваться',
      redirectTitle: 'Уже имеете аккаунт? ',
      link: '/login',
      linkTitle: 'Войти',
    }} handleButton={handleClick}/>
  )
}

export default Registration