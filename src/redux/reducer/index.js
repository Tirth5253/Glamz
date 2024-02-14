//this is the reducer that is used to combine all the reducers

import handleCart from './handleCart';
import handleLike from './handleLike';
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,handleLike
})
export default rootReducers;