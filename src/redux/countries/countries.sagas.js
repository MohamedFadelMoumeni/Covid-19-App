import CONSTANT_TYPES from '../reducer.types';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchCountriesFailure, fetchCountriesSuccess } from './countries.actions';


export function* fetchCountriesAsyncStart() {
    try {
        const response = yield fetch('https://disease.sh/v3/covid-19/countries');
        const countries = yield response.json();
        yield put(fetchCountriesSuccess(countries));
    } catch (e) {
        yield put(fetchCountriesFailure(e.message));
    }
}
export function* onFetchCountriesStart() {
    yield takeLatest(CONSTANT_TYPES.FETCH_COUNTRIES_START, fetchCountriesAsyncStart)
}

export function* countriesSaga() {
    yield all([call(onFetchCountriesStart)]);
}