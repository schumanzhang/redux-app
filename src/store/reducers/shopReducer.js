// reducer is a function that returns a state (from the store)
// takes 2 param
// takes initial state
// action has TYPE and PAYLOAD
// adding/removing widgets from a shop
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + action.payload;
        case "remove":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;