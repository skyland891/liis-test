import { put, takeEvery, call } from 'redux-saga/effects';
import { setUser, SIGN_IN_USER, SIGN_UP_USER } from '../store/userReducer';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase';

const auth = getAuth(app);

function* signInUserWorker(action) {
    try {
        const data = yield call(signInWithEmailAndPassword, auth, action.payload.email, action.payload.password);
        const user = yield call(() => new Promise(res => res(data.user)));
        yield put(setUser({email: user.email, token: user.accessToken, id: user.uid}));
    } catch (error) {
        yield put(console.log(error));
    }
}   

function* signUpUserWorker(action) {
    try {
        const data = yield call(createUserWithEmailAndPassword, auth, action.payload.email, action.payload.password);
        const user = yield call(() => new Promise(res => res(data.user)));
        yield put(setUser({email: user.email, token: user.accessToken, id: user.uid}));
    } catch (error) {
        yield put(console.log(error));
    }
}

export function* userWatcher() {
    yield takeEvery(SIGN_IN_USER, signInUserWorker);
    yield takeEvery(SIGN_UP_USER, signUpUserWorker);
}
