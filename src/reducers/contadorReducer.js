import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

const initialState = 0
export default function contadorReducer(state=initialState,action){
    switch (action.type) {
        case INCREMENT:
            return state + 1
            break;
        case DECREMENT:
            return state - 1
            break;
        case INCREMENT_5:
            return state + action.payload
            break;
        case DECREMENT_5:
            return state - action.payload
            break;
        case RESET:
            return initialState
            break;    
        default:
            return state
            break;
    }
}