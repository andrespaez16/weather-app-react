import React from  "react";
import WeatherExtrainfo from "./WeatherExtrainfo";
import WeatherTemperature from "./WeatherTemperature";

const WeatherData = () =>{

    return <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtrainfo humidity={80} wind={"10ms"}></WeatherExtrainfo>
     </div>
};

export default WeatherData;

