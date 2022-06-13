import { createStore  } from "redux";

const reducerfunction = (state={counter : 0}, action) => {

    if(action.type === "INCREMENT"){
        return {counter : state.counter + 1}
    }

    if(action.type === "DECREMENT" && state.counter > 0){
        return {counter : state.counter - 1}
    }
    if (action.type === "ADDBY"){
        return {counter : state.counter + action.payload} 
    }
    return state;
}

const store = createStore(reducerfunction);

export default store;