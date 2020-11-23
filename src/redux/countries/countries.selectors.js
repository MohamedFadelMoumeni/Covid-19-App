import { createSelector } from 'reselect';

const selectCountriesElement = state => state.countriesElement;


export const selectCountries = createSelector(
    [selectCountriesElement],
    (countriesElement) => countriesElement.countries
)


export const selectCountry = createSelector(
    [selectCountriesElement],
    (countriesElement) => countriesElement.country
)

export const selectCountriesByCases = createSelector(
    [selectCountries],
    (countries) => {
        const dataToBeSorted = [].concat(countries);
        return dataToBeSorted.sort((a, b) => b.cases - a.cases);
    }
)