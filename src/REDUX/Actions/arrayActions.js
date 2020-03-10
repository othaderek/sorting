import { RANDOMIZE_ARRAY, SORT_ARRAY } from './types';
import randomizeArray from '../../utility/randomizeArray'

export const randomArray = () => dispatch => {
    dispatch({
        type: RANDOMIZE_ARRAY,
        payload: randomizeArray()
    })
}


export const sortArray = array => dispatch => {
    dispatch({
        type: SORT_ARRAY,
        payload: array
    })
}