import CONSTANT_TYPES from '../reducer.types';

const INITIAL_STATE = {
    countries: [],
    country: 'worldwide',
    errorMessage: ''
}
const countriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                country: action.payload[0]
            }
        case CONSTANT_TYPES.FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case CONSTANT_TYPES.SET_COUNTRY_SELECTED:
            return {
                ...state,
                country: action.payload
            }
        default:
            return state

    }
}

export default countriesReducer;