//this is the reducer that is used to combine all the reducers

import handleCart from './handleCart'
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
})
export default rootReducers