
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styled from "styled-components";
import Error from "../Error/Error";
import MainPage from "../MainAutoPositon/MainPage";


import MainSearchDisplay from "./MainSearchDisplay";



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
    const [error, setError] = useState(false);


    function setcityhandler(event) {
        event.preventDefault()

        setDisplay(true);

        async function searchWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_MYKEY}`)


                if (response.ok) {
                    const json = await response.json();
                    setTWeather(json)



                    console.log(json)
                    return json

                } else {
                    setError(true);

                    throw new Error('There was an error' + response.status)
                }

            } catch (error) {

                setError(true);

                console.log(error)
            }

        }

        async function searchFiveDay() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_MYKEY}`)





                if (response.ok) {
                    const json = await response.json();
                    setForecast(json)


                    console.log(json.list)
                    return json

                } else {
                    setError(true);

                    throw new Error('There was an error' + response.status)
                }

            } catch (error) {
                setError(true);
                console.log(error)
            }

        }
        searchFiveDay();
        searchWeather();

        console.log(city)
    }




    return (
        <div>

            {!display && !error && <Form onSubmit={setcityhandler} >
                <Input placeholder="Search location" value={city} onChange={(event) => setCity(event.target.value)} />
                <Button onClick={setcityhandler}>Search <AiOutlineSearch /></Button>

            </Form >}

            {display && !error && <Main>


                <MainSearchDisplay weather={weather} />
                <MainPage forecast={forecast} weather={weather} />



            </Main>}
            {error && <Error />}
        </div>
    )
}

export default MainSearchBar;