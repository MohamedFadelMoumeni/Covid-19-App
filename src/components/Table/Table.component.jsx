import React from 'react';

import { connect } from 'react-redux';

import { selectCountriesByCases } from '../../redux/countries/countries.selectors';
import { setCountrySelected } from '../../redux/countries/countries.actions';


import './Table.styles.css';

const Table = ({ countriesOrdered, setCountrySelected }) => {

    return (
        <div className="table">
            <h2 className="table__title">
                Live Cases By Country
        </h2>
            <div className="table__element">
                {
                    countriesOrdered.map(country => (
                        <tr key={country.country} onClick={() => setCountrySelected(country)}>
                            <td>{country.country}</td>
                            <td>
                                <strong>{country.cases}</strong>
                            </td>


                        </tr>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    countriesOrdered: selectCountriesByCases(state)
})
const mapDispatchToProps = dispatch => ({
    setCountrySelected: (country) => dispatch(setCountrySelected(country))
})
export default connect(mapStateToProps, mapDispatchToProps)(Table);