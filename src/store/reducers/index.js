// combine all reducers
// because we can have many reducers

import { combineReducers } from "redux";
import shopReducer from "./shopReducer";

const reducers = combineReducers({
    shop: shopReducer
});

export default reducers;