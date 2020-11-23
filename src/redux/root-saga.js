import { all, call } from 'redux-saga/effects';
import { countriesSaga } from './countries/countries.sagas';
import { allSaga } from './lastUpdate/lastUpdate.sagas';

export function* rootSaga() {
    yield all([call(countriesSaga), call(allSaga)])
}