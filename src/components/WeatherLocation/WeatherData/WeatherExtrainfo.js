import React from "react";
import PropTypes from "prop-types"

const WeatherExtrainfo =({humidity,wind})=>(

<div className="extracont">
   <span className="extraspan">{` Humedad de : ${humidity} % `}</span>
   <span className="extraspan">{` Vientos de : ${wind}  `}</span>
 </div>
);
WeatherExtrainfo.propTypes ={
  humidity:PropTypes.number.isRequired,
  wind:PropTypes.string.isRequired,
};
export default WeatherExtrainfo;