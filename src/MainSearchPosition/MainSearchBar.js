
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { url } from "../Key";
import MainPage from "../MainAutoPositon/MainPage";

import MainSearchDisplay from "./MainSearchDisplay";



const Main = styled.div`

display: flex;
justify-content: space-evenly;
align-content: center;


`

const Input = styled.input`
 padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 70%;
  background: #f1f1f1;
   height: 100%;

`

const Button = styled.button`
 float: left;
  width: 30%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  height: 100%;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;

  &:hover{
      background: #0b7dda;
  }


`

const Form = styled.form`
  box-sizing: border-box;
  width: 100%;
   float: left;
   left: 0;

`



const MainSearchBar = () => {

    const [weather, setTWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [display, setDisplay] = useState(false);
    const [city, setCity] = useState('');


    function setcityhandler(event) {
        event.preventDefault()

        setDisplay(true);

        async function searchWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${url}`)





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
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${url}`)





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

        console.log(city)
    }



    return (
        <div>

            {!display && <Form onSubmit={setcityhandler} >
                <Input placeholder="Search location" value={city} onChange={(event) => setCity(event.target.value)} />
                <Button onClick={setcityhandler}>Search <AiOutlineSearch /></Button>

            </Form >}

            {display && <Main>

                <MainSearchDisplay weather={weather} />
                <MainPage forecast={forecast} weather={weather} />

            </Main>}

        </div>
    )
}

export default MainSearchBar;