import React, { useEffect, useState } from 'react';
import './App.css';
import  Cards from './components/Cards';
import  CountryPicker from './components/CountryPicker';
import  Chart from './components/Chart';

export default function App() {

  const [data, setData] = useState({});
  const [countryData, setCountryData] = useState("");

  async function getData(country){
    let url = "https://covid19.mathdro.id/api";
    let changeableUrl = url;


    if(country){
      changeableUrl = `${url}/countries/${country}`;
    }

    try{
      const response = await fetch(changeableUrl);
      let { confirmed, recovered, deaths, lastUpdate } = await response.json();
      setData({ confirmed, recovered, deaths, lastUpdate });

    }
    catch(error){
      console.log(error)
    }
  }

  async function setCountry(thecountry){
    getData(thecountry);
    setData(thecountry);
    setCountryData(thecountry);
  }
  

  useEffect(() => {
    getData();

  }, []);

  

  return (
    <div className="App">
      <div>
        <h1 className="header">COVID-19 TRACKER APP</h1>
        <Cards state={data} />
        <CountryPicker setCountry={ setCountry } />
        <Chart data={ data } countryData={ countryData } />
      </div> 
    </div>
  );
}

