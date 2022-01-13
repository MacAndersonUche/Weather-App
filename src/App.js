import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { url } from "./Key";
import MainPage from "./MainAutoPositon/MainPage";
import MainSearchBar from "./MainSearchPosition/MainSearchBar";
import TodaysWeather from "./TodaysWeather/TodayWeather";


const Main = styled.div`

display: flex;
justify-content: space-evenly;
align-content: center;


`




function App() {

  const [weather, setTWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [searchClicked, setSearchClicked] = useState(false);





  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {


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

    });



  }, [])



  return (
    <Switch>
      <Route path="/search">
        <MainSearchBar />
      </Route>
      <Route path="/">
        <Main>

          <TodaysWeather weather={weather} setSearchClicked={setSearchClicked} searchClicked={searchClicked} />
          <MainPage weather={weather} forecast={forecast} searchClicked={searchClicked} />

        </Main>

      </Route>
    </Switch>

  );

}


export default App;
