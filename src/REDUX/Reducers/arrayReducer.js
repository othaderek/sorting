import { RANDOMIZE_ARRAY, SORT_ARRAY } from '../Actions/types.js'
import randomizeArray from '../../utility/randomizeArray.js'

const initialState = []

export default function(state = initialState, action){
    console.log(state);
    
    switch(action.type){
        case RANDOMIZE_ARRAY:
            return action.payload
        case SORT_ARRAY:
            return action.payload
        default:
            return state;
    }
}