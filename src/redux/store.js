import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'




const fooduStore = createStore(Reducer, applyMiddleware(thunk))


export { fooduStore }