import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 314.86,
        temp: 310.96,
        temp_max: 310.96,
        temp_min: 310.96,
        humidity: 37,
        weather: "moderate rain",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather app for city</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}