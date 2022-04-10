import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { hotelsReducer } from "./hotelsReducer";
import { userReducer } from "./userReducer";
import { inputReducer } from './inputReducer'
import { authReducer } from "./authReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    hotelsReducer, 
    userReducer,
    inputReducer,
    authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);

export default store;