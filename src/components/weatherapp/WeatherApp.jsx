import React, {  useState } from 'react'
import axios from 'axios';
const WeatherApp = () => {
  // const apiKey = "1cb4b7d5b0616c835ec792b366608d71"
const [city,setCity]= useState();
const [weather, setWeather]= useState()

const hadleCityChange =(e)=>{
setCity(e.target.value)
}

const fetchWeather = async ()=>{
  try{
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"1cb4b7d5b0616c835ec792b366608d71"}`)
setWeather(response);
  }
  catch(error){
    
  }
}


const handleGetWeather =()=>{
   fetchWeather();
}
// useEffect(()=>{

// },[weather])



  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh] bg-amber-50'> 
    <h1 className='text-4xl mb-8'>Weather App</h1>

      {/* {---------first child div[1]---------} */}
      <div className='flex flex-col items-center bg-sky-200 w-[680px] h-[490px] rounded-2xl'>
       <input className='border mt-9 bg-amber-50 w-[580px] rounded h-[40px] ' type="text" placeholder='Enter City Name' value={city} onChange={hadleCityChange} />
       <button onClick={handleGetWeather} className='border bg-sky-600 hover:bg-blue-800 transition-all duration-500 text-white rounded-full px-[34px] py-[6px] mt-[35px] ' >Get Weather</button>
       {weather && <> 
  <div className='flex flex-col mt-8 text-2xl gap-6'>
    <h3 className='font-semibold text-4xl'>{weather.data.name}</h3>
    <p>Temp is {weather.data.main.temp}</p>
    <p>{weather.data.weather[0].description}</p>
  </div>
  </>}
      </div>
 
 

    </div>
  )
}

export default WeatherApp