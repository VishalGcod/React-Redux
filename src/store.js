import { createStore,applyMiddleware } from "redux";
import { fetchReducer } from "./reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(fetchReducer,composeWithDevTools(applyMiddleware(thunk)))
