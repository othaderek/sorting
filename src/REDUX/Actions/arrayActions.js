import { RANDOMIZE_ARRAY } from './types';
import randomizeArray from '../../utility/randomizeArray'

export const randomArray = () => dispatch => {
    dispatch({
        type: RANDOMIZE_ARRAY,
        payload: randomizeArray()
    })
}