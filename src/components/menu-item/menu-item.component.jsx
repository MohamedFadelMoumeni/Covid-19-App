import React from 'react';

import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';

import { setCountrySelected } from '../../redux/countries/countries.actions';



const MenuItemComponent = ({ country, setCountrySelected }) => {

    return (
        <>
            <MenuItem value={country.country} onClick={() => setCountrySelected(country)}>{country.country}</MenuItem>

        </>


    )
}


const mapDispatchToProps = dispatch => ({
    setCountrySelected: (country) => dispatch(setCountrySelected(country))
})

export default connect(null, mapDispatchToProps)(MenuItemComponent);