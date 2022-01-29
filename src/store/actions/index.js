// a function that dispatches an action

export const addWidget = (amount) => {
    // return a function
    
    return (dispatch) => {
        // can make http calls here as well
        
        dispatch({
            type: "add",
            payload: amount
        })
    }
};

export const removeWidget = (amount) => {
    return (dispatch) => {
        // dispatch is async
        dispatch({
            type: "remove",
            payload: amount
        })
    }
}