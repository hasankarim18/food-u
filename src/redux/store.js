import { createStore } from "redux";

import { Reducer } from "./reducer";




const fooduStore = createStore(Reducer)


export { fooduStore }