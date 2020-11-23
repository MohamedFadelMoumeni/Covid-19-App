import React from 'react';

import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Map.styles.css';




const Map = () => (
    <div className="map">
        <h2><ReportProblemIcon fontSize="large" /> <span>How can I protect myself from COVID-19?</span></h2>
        <p className="paragraph">
            If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!
        </p>
        <h3>Make wearing a mask a normal part of being around other people.
</h3>
        <p className="paragraph">
            Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives; the use of a mask alone is not sufficient to provide an adequate level of protection against COVID-19


</p>
        <h4><span>Powered With</span> <span className="love"><FavoriteIcon /> </span><span> By Mohamed Fadel Moumeni</span>
        </h4>
    </div>

)

export default Map;