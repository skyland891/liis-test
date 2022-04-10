const initialState = {
    emailValue: '',
    passwordValue: '',
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_EMAIL_INPUT':
            return {...state, emailValue: action.payload};
        case 'CHANGE_PASSWORD_INPUT':
            return {...state, passwordValue: action.payload};
        default:
            return state;
    }
}

export const changeEmailActionCreator = (payload) => ({type: 'CHANGE_EMAIL_INPUT', payload})
export const changePasswordActionCreator = (payload) => ({type: 'CHANGE_PASSWORD_INPUT', payload})