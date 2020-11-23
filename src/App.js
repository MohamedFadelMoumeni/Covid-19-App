import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LeftSide from './components/left_side/left-side.component';
import RightSide from './components/right_side/right-side.component';

import { fetchCountriesStart } from './redux/countries/countries.actions';

import './App.css';
import 'leaflet/dist/leaflet.css';

const App = ({ fetchCountriesStart, countries }) => {
  useEffect(() => {
    fetchCountriesStart()
  }, [fetchCountriesStart])

  return (
    <div className="App">
      {
        countries.length ?
          (<>
            <LeftSide />
            <RightSide />
          </>
          )
          : (<div className="lds-dual-ring"></div>)
      }


    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  fetchCountriesStart: () => dispatch(fetchCountriesStart())
})
const mapStateToProps = state => ({
  countries: state.countriesElement.countries
})

export default connect(mapStateToProps, mapDispatchToProps)(App)