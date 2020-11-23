import CONSTANT_TYPES from '../reducer.types';

export const fetchCountriesStart = () => ({
    type: CONSTANT_TYPES.FETCH_COUNTRIES_START
});

export const fetchCountriesSuccess = countries => ({
    type: CONSTANT_TYPES.FETCH_COUNTRIES_SUCCESS,
    payload: countries
})
export const fetchCountriesFailure = err => ({
    type: CONSTANT_TYPES.FETCH_COUNTRIES_FAILURE,
    payload: err
})
export const setCountrySelected = country => ({
    type: CONSTANT_TYPES.SET_COUNTRY_SELECTED,
    payload: country
})