import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmailActionCreator, changePasswordActionCreator } from '../store/inputReducer';
import { signInUser } from '../store/userReducer';
import { useAuth } from '../hooks/useAuth';
import { loadingStart } from '../store/authReducer';
import Form from './Form';

function Login() {
  const navigate = useNavigate();
  const emailValue = useSelector(state => state.inputReducer.emailValue);
  const passwordValue = useSelector(state => state.inputReducer.passwordValue);
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const handleClick = (e) => {
      e.preventDefault(); 
      dispatch(signInUser({email: emailValue, password: passwordValue}));
      dispatch(loadingStart());
      navigate('/');
  }
  const setEmailValue = (value) => {
    dispatch(changeEmailActionCreator(value));
  }
  const setPasswordValue = (value) => {
    dispatch(changePasswordActionCreator(value));
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
    }}  handleEmail= {setEmailValue} handlePassword= {setPasswordValue} handleButton={handleClick}/>
  )
}

export default Login