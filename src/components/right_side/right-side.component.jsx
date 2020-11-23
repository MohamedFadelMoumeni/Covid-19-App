import React from 'react';

import Table from '../Table/Table.component';
import Graph from '../Graph/Graph.component';
import './right-side.styles.css';

const RightSide = () => (
    <div className="right-side">
        <Table />
        <Graph />
    </div>
)

export default RightSide;