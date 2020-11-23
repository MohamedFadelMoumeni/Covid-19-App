import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import './card-item.styles.css';

const CardItem = ({ country, attr }) => {
    const { todayCases, todayDeaths, todayRecovered, cases, deaths, recovered } = country;
    return (
        <div className="card-item">
            <div className="card-container">
                {
                    attr === "case" ?
                        (
                            <>
                                <AddCircleOutlineIcon className="icon" fontSize="large" />
                                <div className="details">
                                    <h1>{`+ ${todayCases}`}</h1>
                                    <p>Today Cases</p>
                                </div>
                            </>
                        )
                        : null
                }
                {
                    attr === "death" ? (
                        <>
                            <SentimentVeryDissatisfiedIcon className="icon death" fontSize="large" />
                            <div className="details">
                                <h1>{`+ ${todayDeaths}`}</h1>
                                <p>Today Deaths</p>
                            </div>
                        </>
                    ) : null
                }
                {
                    attr === "recovered" ? (
                        <>
                            <InsertEmoticonIcon className="icon recovred" fontSize="large" />
                            <div className="details">
                                <h1>{`+ ${todayRecovered}`}</h1>
                                <p>Today Recovered</p>
                            </div>
                        </>
                    ) : null
                }


            </div>
            <div className="total">
                <h3 className="title">Total</h3>
                {
                    attr === "case" ? (<span className="total_number">{cases}</span>) : null
                }
                {
                    attr === "death" ? (<span className="total_number">{deaths}</span>) : null
                }
                {
                    attr === "recovered" ? (<span className="total_number">{recovered}</span>) : null
                }
            </div>
        </div >
    )
}

export default CardItem;