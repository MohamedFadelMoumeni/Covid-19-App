import React from 'react';
import { connect } from 'react-redux';
import { selectCountry } from '../../redux/countries/countries.selectors';

import CardItem from '../card-item/card-item.component';

import './menu-card.styles.css';


const MenuCard = ({ countrySelected }) => (
    <div className="menu-card">
        <CardItem attr="case" country={countrySelected} />
        <CardItem attr="death" country={countrySelected} />
        <CardItem attr="recovered" country={countrySelected} />
    </div>
)

const mapStateToProps = state => ({
    countrySelected: selectCountry(state)
})
export default connect(mapStateToProps)(MenuCard);