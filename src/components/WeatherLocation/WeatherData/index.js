import React from  "react";
import WeatherExtrainfo from "./WeatherExtrainfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

const WeatherData = () =>{

    return <div className="datacont">
        <WeatherTemperature temperature ={20} weatherstate={"hot"}></WeatherTemperature>
        <WeatherExtrainfo humidity={80} wind={"10ms"}></WeatherExtrainfo>
     </div>
};

export default WeatherData;

