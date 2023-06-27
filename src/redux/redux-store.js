import authReducer from "./auth-reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    authReducer: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

window.store = store 

export default store