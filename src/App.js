import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { url } from "./Key";
import MainPage from "./MainAutoPositon/MainPage";
import MainSearchBar from "./MainSearchPosition/MainSearchBar";
import TodaysWeather from "./TodaysWeather/TodayWeather";
import AppContext from "./AppContext";
import Loading from "./Error/Loading";
import ErrorLocation from "./Error/ErrorLocation";


const Main = styled.div`

display: flex;
justify-content: space-evenly;
align-content: center;

 

    @media (max-width: 770px) {
 
    display: block;
    width: 100vw;
    height: 100vh;
    
     font-size: 0.8rem;
  }


`




function App() {

  const [weather, setTWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [searchClicked, setSearchClicked] = useState(false);
  const [tempState, setTempState] = useState("");
  const [fiveFar, setFiveFar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);



  //Calculating values in Celsius
  const cel = weather.main && Math.floor(weather.main && weather.main.temp - 273.15)


  //Calculating values in farenheight using 
  const farNum = weather.main && weather.main.temp - 273.15;

  console.log(tempState);




  function convertToF() {
    setFiveFar(true);

    setTempState(`${Math.floor(farNum * 9 / 5) + 32} F`)

  }

  function convertToC() {
    setFiveFar(false);
    setTempState(`${cel} C`)

  }




  const globalContext = {
    convertToF,
    tempState,
    setTempState,
    convertToC,
    fiveFar,
  }




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {

      if (Object.keys(position).length === 0) {

        setError(true);
      }

      async function searchWeather() {
        try {

          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude && position.coords.latitude}&lon=${position.coords.longitude && position.coords.longitude}&appid=${url}`)





          if (response.ok) {
            const json = await response.json();
            setTWeather(json)



            console.log(json)
            return json

          } else {

            throw new Error('There was an error' + response.status)
          }

        } catch (error) {

          console.log(error)
        }

      }

      async function searchFiveDay() {
        try {

          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude && position.coords.latitude}&lon=${position.coords.longitude && position.coords.longitude}&appid=${url}`)





          if (response.ok) {
            const json = await response.json();
            setForecast(json)


            console.log(json.list)
            return json

          } else {

            throw new Error('There was an error' + response.status)
          }

        } catch (error) {

          console.log(error)
        }

      }
      searchFiveDay();
      searchWeather();
      setLoading(false);
    });
    setTempState(`${cel} C`)


  }, [cel])

  if (error && loading) {
    return <ErrorLocation />
  }

  return (
    <Switch>
      <Route path="/search">
        <AppContext.Provider value={globalContext}>
          <MainSearchBar />
        </AppContext.Provider>
      </Route>
      <Route path="/">
        <Main>
          {!loading && <AppContext.Provider value={globalContext}>
            <TodaysWeather weather={weather} setSearchClicked={setSearchClicked} searchClicked={searchClicked} />
            <MainPage weather={weather} forecast={forecast} searchClicked={searchClicked} />
          </AppContext.Provider>}
          {loading && <Loading />}
        </Main>
      </Route>
    </Switch>

  );

}


export default App;
