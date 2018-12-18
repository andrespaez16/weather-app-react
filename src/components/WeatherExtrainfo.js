import React from "react";

const WeatherExtrainfo =({humidity,wind})=>(

<div>
   <span>{`${humidity} % - `}</span>
   <span>{`${wind}  viento`}</span>
 </div>
);
export default WeatherExtrainfo;