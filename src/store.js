import { createStore,applyMiddleware,combineReducers } from "redux";
import { fetchReducer, formReducer } from "./reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer=combineReducers({
    fetchData:fetchReducer,
    forms:formReducer,
})
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
