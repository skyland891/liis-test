import { push } from "react-router-redux";

const initialState = {
    email: null,
    token: null,
    id: null,
}

export const SET_USER = "SET_USER"

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            return {...state, email: action.payload.email, token: action.payload.token, id: action.payload.id};
        default:
            return state;
    }
}

export const setUser = (payload) => ({type: SET_USER, payload})

export const SIGN_IN_USER = "SIGN_IN_USER"
export const SIGN_UP_USER = "SIGN_UP_USER"

export const signInUser = (payload) => ({type: SIGN_IN_USER, payload})
export const signUpUser = (payload) => ({type: SIGN_UP_USER, payload})