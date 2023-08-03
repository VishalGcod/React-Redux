import { createStore,applyMiddleware } from "redux";
import { fetchReducer } from "./reducers";
import thunk from 'redux-thunk'


export const store = createStore(fetchReducer,applyMiddleware(thunk))

