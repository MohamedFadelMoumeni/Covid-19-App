import CONSTANT_TYPES from '../reducer.types';

export const fetchAllStart = () => ({
    type: CONSTANT_TYPES.FETCH_ALL_START
})
export const fetchAllSuccess = all => ({
    type: CONSTANT_TYPES.FETCH_ALL_SUCCESS,
    payload: all
})

export const fetchAllFailure = err => ({
    type: CONSTANT_TYPES.FETCH_ALL_FAILURE,
    payload: err
})