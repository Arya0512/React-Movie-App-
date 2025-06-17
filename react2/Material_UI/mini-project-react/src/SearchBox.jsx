import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let link_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_Key="36ff12008436b4b82f057c0cc36c2272";
    let getWeatherInfo=async()=>{
        try{
             let responce=await fetch(`${link_URL}?q=${city}&appid=${API_Key}`)
        let jsonResponce= await responce.json();
        console.log(jsonResponce);
        let result={
            city:city,
            temp:jsonResponce.main.temp,
            temp_min:jsonResponce.main.temp_min,
            temp_max:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            feelsLike:jsonResponce.main.feels_like,
            weather:jsonResponce.weather[0].description,

        };
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
       
    }
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
      
    }
    return(<div>
        
        <form className="searchbox">
            <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" onClick={handleSubmit}>Search</Button>
            {error && <p style={{color:"red"}}>no such place exits in API</p>}

        </form>
    </div>)
}