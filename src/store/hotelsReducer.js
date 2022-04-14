const initialState = {
    hotelsList: [],
    favHotels: [],
    location: '',
    checkInDate: '',
    checkOutDate: '',
}

export const SET_HOTELS = "SET_HOTELS";
export const SET_FAVOURITE_HOTEL = "SET_FAVOURITE_HOTEL";
export const DELETE_FAVOURITE_HOTEL = "DELETE_FAVOURITE_HOTEL";
export const SORTING_BY_PRICE = "SORTING_BY_PRICE";
export const SORTING_BY_RATING = "SORTING_BY_RATING";

export const hotelsReducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_HOTELS:
            const compareId = (id) => {
                for(let hotel of newState.favHotels) {
                    if(hotel.hotelId === id) {
                        return true;
                    }
                }
                return false;
            }
            return {...newState, hotelsList: action.payload.hotelsList.map(hotel => ({...hotel, isFav: compareId(hotel.hotelId), checkInDate: action.payload.checkInDate, checkOutDate: action.payload.checkOutDate})), location: action.payload.location, checkInDate: action.payload.checkInDate, checkOutDate: action.payload.checkOutDate};
        case SET_FAVOURITE_HOTEL:
            action.payload.hotel.isFav = true;
            return {...newState, favHotels: [...newState.favHotels, action.payload.hotel], hotelsList: [...newState.hotelsList.map(hotel => {
                if(hotel.hotelId === action.payload.hotel.hotelId) {
                    return action.payload.hotel;
                }
                return hotel;
            })]};
        case DELETE_FAVOURITE_HOTEL:
            const newFav = newState.favHotels.filter(hotel => hotel.hotelId !== action.payload.id);
            return {...newState, favHotels: newFav, hotelsList: [...newState.hotelsList.map(hotel => {
                if(hotel.hotelId === action.payload.id) {
                    hotel.isFav = false;
                    return hotel;
                }
                return hotel;
            })]};
        case SORTING_BY_PRICE:
            if(action.payload.direction === 'up') {
                newState.favHotels.sort((a, b) => a.priceFrom > b.priceFrom ? 1 : -1);
            }
            else {
                newState.favHotels.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1);
            }
            return {...newState};
        case SORTING_BY_RATING:
            if(action.payload.direction === 'up') {
                newState.favHotels.sort((a, b) => a.stars > b.stars ? 1 : -1);
            }
            else {
                newState.favHotels.sort((a, b) => a.stars < b.stars ? 1 : -1);
            }
            return {...newState};
        default:
            return state;
    }
}

export const FETCH_HOTELS = 'FETCH_HOTELS';

export const sortingByPrice = (payload) => ({type: SORTING_BY_PRICE, payload});
export const sortingByRating = (payload) => ({type: SORTING_BY_RATING, payload});
export const setHotels = (payload) => ({type: SET_HOTELS, payload});
export const fetchHotels = (payload) => ({type: FETCH_HOTELS, payload});
export const setFavouriteHotel = (payload) => ({type: SET_FAVOURITE_HOTEL, payload});
export const deleteFavouriteHotel = (payload) => ({type: DELETE_FAVOURITE_HOTEL, payload});
