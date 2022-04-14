const initialState = {
    email: null,
    token: null,
    id: null,
    setUserError: false,
};

export const SET_USER = "SET_USER";
export const SET_USER_FAIL = "SET_USER_FAIL";
export const DELETE_USER = "DELETE_USER";

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            localStorage.setItem("user", JSON.stringify({
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
            }));
            return {...state, email: action.payload.email, token: action.payload.token, id: action.payload.id, setUserError: action.payload.setUserError};
        case SET_USER_FAIL: 
            return {...state, setUserError: true};
        case DELETE_USER:
            localStorage.setItem("user", JSON.stringify({
                email: null,
                token: null,
                id: null,
            }));
            return {...initialState};
        default:
            return state;
    }
}

export const deleteUser = () => ({type: DELETE_USER});
export const setUser = (payload) => ({type: SET_USER, payload});
export const setUserFail = () => ({type: SET_USER_FAIL});

export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_UP_USER = "SIGN_UP_USER";

export const signInUser = (payload) => ({type: SIGN_IN_USER, payload});
export const signUpUser = (payload) => ({type: SIGN_UP_USER, payload});