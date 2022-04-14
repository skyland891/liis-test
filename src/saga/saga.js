import { all } from "redux-saga/effects"
import { hotelWatcher } from "./hotelsSaga"
import { userWatcher } from "./userSaga"

export function* rootWatcher() {
    yield all([userWatcher(), hotelWatcher()])
}