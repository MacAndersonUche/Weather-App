import { Link } from "react-router-dom";
import styled from "styled-components";
import MainSearchBar from "../MainSearchPosition/MainSearchBar";
import WeatherDiv from "./WeatherDiv"


const Main = styled.div`
left: 0;
`



const TodaysWeather = ({ weather }) => {



    return (
        <Main>
            <Link to="/search"><button>Search for place</button></Link>
            <WeatherDiv weather={weather} />

        </Main>
    )
}

export default TodaysWeather;