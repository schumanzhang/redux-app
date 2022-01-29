import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// store take reducers and default state, which can just be empty object
// every component should then have access to the store (global state)
// we wrap components inside a 'provider' to achieve this
// we also need to apply redux-thunk middleware, because dispatch functions are async
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)