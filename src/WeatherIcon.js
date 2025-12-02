import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon({ icon, color, size}) {
  return (
    <ReactAnimatedWeather
      icon={icon}
      color={color}
      size={size}
      animate={true}
    />
  );
}

