import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_HOTELS, setHotels } from '../store/hotelsReducer';

const fetchHotelsFromApi = (location, checkInDate, checkOutDate) => fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=10`);

function* fetchHotelsWorker(action) {
    try {
        const data = yield call(fetchHotelsFromApi, action.payload.location, action.payload.checkInDate, action.payload.checkOutDate);
        const hotelsList = yield call(() => new Promise(res => res(data.json())));
        yield put(setHotels({hotelsList, location: action.payload.location, checkInDate: action.payload.checkInDate, checkOutDate: action.payload.checkOutDate}))
    } catch(error) {

    }
}

export function* hotelWatcher() {
    yield takeEvery(FETCH_HOTELS, fetchHotelsWorker);
}