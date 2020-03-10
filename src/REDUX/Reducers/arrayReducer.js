import { RANDOMIZE_ARRAY } from '../Actions/types.js'
import randomizeArray from '../../utility/randomizeArray.js'

const initialState = {
    array: randomizeArray()
}

export default function(state = initialState, action){
    switch(action.type){
        case RANDOMIZE_ARRAY:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}