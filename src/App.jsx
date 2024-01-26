import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from './Component/Container';



function App() {

const apiKey = "e8c24597158bcaa170b724112df7498f";
const[inputCity,setInputCity] = useState("");
const[data,setData] = useState({});

const getWeatherDetail = (cityName) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  axios.get(apiURL)
    .then((res) => {
      console.log("response", res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
};


const handleChangeInput = (e) =>{
  setInputCity(e.target.value);
}
const handleSearch = () =>{
  getWeatherDetail(inputCity);
}





  return (
    <Container>
  <div className="col-md-12">

  <div className="weatherBg">
          <h1 className='heading'>Weather App</h1>
       
    <div className='d-grid gap-3 col-4 mt-4'>
      <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput}/>  
      <button onClick={handleSearch} className="btn btn-primary" type="button">Search</button>
    </div>

  </div>
  {Object.keys(data).length > 0 &&
  <div className="col-md-12 text-center mt-5">
  <div className="shadow rounded wetherResultBox">
     <img className='weatherIcon' src ="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>
     <h5 className='weatherCity'>{data?.name}</h5>
     <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
     <h6 className='weatherTemp'>{data?.wind?.speed}</h6>
    </div>
  </div>
}

  
</div>
</Container>  
    
  )
}

export default App

// https://chat.openai.com/share/be59c80b-e7ca-41c4-a29e-12c77eb8240d