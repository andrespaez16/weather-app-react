import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";

const states ={
    sunny :"day-sunny",
    rain :"day-rain",
    fog :"day-fog",
    hot:"hot",
    cloud:"day-cloudy"
};
const weathergeticon =(weatherstate) =>{

    const state =states[weatherstate];
    const iconsize = "5x";
    if(state)
        return<WeatherIcons className="weicon" name ={state} size={iconsize} />
    else
        return <WeatherIcons  className="weicon" name ={"day-sunny"} size={iconsize}/>
};
const WeatherTemperature =({temperature, weatherstate}) =>(
    <div className="tempcont">{
          weathergeticon(weatherstate) 
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">{`C`}</span>
    </div>
);
WeatherTemperature.propTypes ={
    temperature:PropTypes.number.isRequired,
    weatherstate:PropTypes.string.isRequired
};
export default WeatherTemperature
