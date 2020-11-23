import { combineReducers } from 'redux';
import countriesReducer from './countries/countries.reducer';
import allReducer from './lastUpdate/lastUpdate.reducer';
const rootReduucer = combineReducers({
    countriesElement: countriesReducer,
    allElement: allReducer
})

export default rootReduucer;