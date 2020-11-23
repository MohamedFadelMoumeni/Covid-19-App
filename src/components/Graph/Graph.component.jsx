import React, { useEffect } from 'react';
import numeral from "numeral";
import { connect } from 'react-redux';

import { Line } from 'react-chartjs-2';

import { fetchAllStart } from '../../redux/lastUpdate/lastUpdate.actions'
import { selectAll, selectDataForGraph } from '../../redux/lastUpdate/lastUpdate.selectors';
import './Graph.styles.css';

const Graph = ({ fetchAllStart, chartData, data }) => {

    useEffect(() => {
        fetchAllStart()
    }, [fetchAllStart])

    const options = {
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: function (tooltipItem, data) {
                    return numeral(tooltipItem.value).format("+0,0");
                },
            },
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        format: "MM/DD/YY",
                        tooltipFormat: "ll",
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return numeral(value).format("0a");
                        },
                    },
                },
            ],
        },
    };
    return (
        <div className="graph">
            <h2 className="graph__title">
                Worldwide New Cases
        </h2>
            {
                chartData.length ?
                    (<Line
                        className="line"
                        data={{
                            datasets: [
                                {
                                    backgroundColor: "rgba(204, 16, 52, .4)",
                                    borderColor: '#CC1034',
                                    data: chartData
                                }
                            ]
                        }}
                        options={options}
                    />) : null
            }

        </div>
    )
}
const mapStateToProps = (state) => ({
    data: selectAll(state),
    chartData: selectDataForGraph(state)
})
const mapDispatchToProps = dispatch => ({
    fetchAllStart: () => dispatch(fetchAllStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Graph)