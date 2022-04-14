import { useSelector } from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.userReducer);

    if(JSON.parse(localStorage.getItem("user"))?.token) {
        const {email, token, id} = JSON.parse(localStorage.getItem("user"));
        return {
            isAuth: !!email,
            email,
            token,
            id,
        }
    }
    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}