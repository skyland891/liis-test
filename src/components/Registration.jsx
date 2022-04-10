import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEmailActionCreator, changePasswordActionCreator } from '../store/inputReducer';
import { signUpUser } from '../store/userReducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { loadingStart } from '../store/authReducer';
import { useAuth } from '../hooks/useAuth';
import Form from './Form';

function Registration() {
const navigate = useNavigate();
const {isAuth, email} = useAuth();
const emailValue = useSelector(state => state.inputReducer.emailValue);
const passwordValue = useSelector(state => state.inputReducer.passwordValue);
const dispatch = useDispatch();
const handleClick = (e) => {
    e.preventDefault();
    dispatch(signUpUser({email: emailValue, password: passwordValue}));
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
    formTitle: 'Регистрация',
    buttonTitle: 'Зарегистрироваться',
    redirectTitle: 'Уже имеете аккаунт? ',
    link: '/login',
    linkTitle: 'Войти',
  }}  handleEmail= {setEmailValue} handlePassword= {setPasswordValue} handleButton={handleClick}/>
)
}

export default Registration