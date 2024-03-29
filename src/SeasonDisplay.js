import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text : "Lets hit the beach",
        iconName : "sun"
    },

    winter: {
        text : "Burr!!! It's cold",
        iconName : "snowflake"
    }
} 

const getSeason = (lat, month) => {
    if(month>0 && month<9) {
        return(
            lat>0?'winter':'summer'
        );
    } else {
        return(
            lat>0?'summer':'winter'
        );
    }
} 

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    const { text, iconName } =  seasonConfig[season];

    return (
        <div className = {`season-display ${season}`}>
            <i className = {`massive icon-left ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`massive icon-right ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;