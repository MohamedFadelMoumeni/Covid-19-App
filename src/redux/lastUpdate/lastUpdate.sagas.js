import CONSTANT_TYPES from '../reducer.types';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchAllFailure, fetchAllSuccess } from './lastUpdate.actions';

export function* fetchAllAsyncStart() {
    try {
        const response = yield fetch('https://disease.sh/v3/covid-19/historical/all?last=120');
        const all = yield response.json();
        yield put(fetchAllSuccess(all))
    } catch (e) {
        yield put(fetchAllFailure(e.message))
    }
}

export function* onFetchAllStart() {
    yield takeLatest(CONSTANT_TYPES.FETCH_ALL_START, fetchAllAsyncStart)
}

export function* allSaga() {
    yield all([call(onFetchAllStart)])
}