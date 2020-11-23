import React, { useState } from 'react';
import { connect } from 'react-redux';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MenuItemComponent from '../menu-item/menu-item.component';
import { FormControl, Select } from '@material-ui/core';
import { selectCountries, selectCountry } from '../../redux/countries/countries.selectors';

import './header.styles.css';

const Header = ({ countries, countrySelected }) => {
    const [country, setCountry] = useState('worldwide')
    return (
        <div className="header">
            <h1 className="logo"> <LocalHospitalIcon fontSize="large" className="logo-img" /> <span>COVID-19 TRACKER</span></h1>

            <FormControl className='header__dropdown' >
                <Select variant="outlined" className="header__select" value={countrySelected.country}>
                    {
                        countries.map(country => <MenuItemComponent key={country.country} country={country} />)
                    }
                </Select>
            </FormControl>
        </div >
    )
}

const mapStateToProps = (state) => ({
    countries: selectCountries(state),
    countrySelected: selectCountry(state)
})


export default connect(mapStateToProps)(Header);