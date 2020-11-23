import React from 'react';

import MenuCard from '../menu-card/menu-card.component';
import Header from '../header/header.component';
import Map from '../Map/Map.component';



import './left-side.styles.css';

const LeftSide = () => (
    <div className="left-side">
        <Header />
        <MenuCard />
        <Map />



    </div>
)

export default LeftSide;