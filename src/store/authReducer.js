const initialState = {
    loading: false,
}

const LOADING_START = 'LOADING_START';
const LOADING_END = 'LOADING_END';

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {...state, loading: true}
        case LOADING_END:
            return {...state, loading: false}
        default:
            return state;
    }
}

export const loadingStart = () => ({type: LOADING_START})
export const loadingEnd = () => ({type: LOADING_END})