import React from "react";
import WeatherIcons from "react-weathericons";
const states ={
    sunny :"day-sunny",
    rain :"day-rain",
    fog :"day-fog",
    hot:"hot",
    cloud:"day-cloudy"
};
const weathergeticon =(weatherstate) =>{
    const state =states[weatherstate];
    if(state)
        return<WeatherIcons name ={state} size="2x"/>
    else
        return <WeatherIcons name ={"day-sunny"} size="2x"/>
};
const WeatherTemperature =({temperature, weatherstate}) =>(
    <div>{
          weathergeticon(weatherstate) 
        }
        <span>{`${temperature} grados`}</span>
    </div>
);


export default WeatherTemperature
